"""
Flask app to automatically deploy processes in a virtual machine
"""

from flask import Flask, request, render_template, redirect, flash
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user, login_required
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
import os, subprocess, bcrypt, secrets

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = open(".secret_key", "r").read(100).strip()

db = SQLAlchemy(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), unique = True, nullable = False)
    password = db.Column(db.String(20), nullable = False)

    repos = db.relationship("Repo", backref = "owner", lazy = True)

    def __repr__(self):
        return f"(id: {self.id}, username: {self.username}, password: {self.password})"

class Repo(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(20), unique = True, nullable = False)
    deploy_key = db.Column(db.String(20), nullable = False)

    owner_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __repr__(self):
        return f"(id: {self.id}, name: {self.name}, deploy_key: {self.deploy_key}, owner_id: {self.owner_id})"

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class RepoForm(FlaskForm):
    name = StringField('Exact Git repository name', validators=[DataRequired()])
    submit = SubmitField('Deploy Repository')

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route("/")
@app.route("/home")
def home():
    if current_user.is_authenticated:
        return redirect("/dashboard")
    else:
        return redirect("/login")

@app.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html", repos = Repo.query.filter_by(owner_id = current_user.id).all())

@app.route("/repo/new", methods = ['GET', 'POST'])
@login_required
def new_repo():
    form = RepoForm()
    if form.validate_on_submit():
        if Repo.query.filter_by(name = form.name.data).first():
            flash("Error: A repository with this name already exists.", "danger")
            return redirect("/repo/new")
        if not os.path.isdir(form.name.data):
            flash(f"Error: The directory \"{os.path.join(os.getcwd, form.name.data)}\" does not exist.", "danger")
            return redirect("/repo/new")
        if not os.path.isfile(f"/etc/systemd/system/{form.name.data}.service"):
            flash(f"Error: {form.name.data}.service has not been created in /etc/systemd/system.", "danger")
            return redirect("/repo/new")

        deploy_key = secrets.token_hex()
        repo = Repo(name = form.name.data, deploy_key = bcrypt.hashpw(deploy_key.encode(), bcrypt.gensalt()), owner_id = current_user.id)
        db.session.add(repo)
        db.session.commit()
        flash(f"Successfully deployed '{repo.name}'. Your deploy key is '{deploy_key}'. This key will only be shown once. If you lose it, you may can a new one in your dashboard.", "success")
        return redirect("/dashboard")
    return render_template("new_repo.html", form = form)

@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect("/")
    form = LoginForm()
    if form.validate_on_submit():
        usr = User.query.filter_by(username = form.username.data).first()
        if not usr:
            flash("Error: Username not found", "danger")
            return redirect("/login")
        if bcrypt.checkpw(form.password.data.encode(), usr.password):
            login_user(usr)
            flash(f"Successfully logged in as {usr.username}", "success")
            return redirect("/dashboard")
        else:
            flash("Error: Password does not match with username", "danger")
            return redirect("/login")
    return render_template("login.html", form = form)

@app.route("/logout")
def logout():
    logout_user()
    flash('Successfully logged out. See you later!', 'success')
    return redirect("/home")

@app.route("/deploy", methods = ['POST'])
def deploy():
    try:
        repo_name = request.args['repo_name']
    except:
        return "Error: repo_name argument not provided in request URL."
    
    repo = Repo.query.filter_by(name = repo_name).first()
    if not repo:
        return "Error: repository not found."

    try:
        deploy_key = request.json['deploy_key']
    except:
        return "Error: deploy_key not provided in POST JSON data."

    if not bcrypt.checkpw(deploy_key.encode(), repo.deploy_key):
        return "Error: deploy_key provided is not correct."
    
    with open("log.txt", "w") as fo, open("errors.txt", "w") as fe:
        proc = subprocess.Popen(f"cd {repo_name} && git pull && sudo systemctl restart {repo_name}", stdout = fo, stderr = fe, shell = True)
        proc.wait(10)
        fo.flush()

    with open('log.txt', 'r') as fi, open('errors.txt', 'r') as fe:
        if proc.returncode == 0:
            return f"Security checks passed. \n\"{repo_name}\" deployed with Status code {proc.returncode}. \nTerminal output: {fi.read(5000)} \nTerminal errors: {fe.read(5000)}"
        else:
            return f"Security checks passed. \n\"{repo_name}\" deployed with Error code {proc.returncode}. \nTerminal output: {fi.read(5000)} \nTerminal errors: {fe.read(5000)}"

if __name__ == "__main__":
    app.run(debug = False)
