"""
Flask app to automatically deploy processes in a virtual machine
"""

from flask import Flask, request
from flask_login import LoginManager, UserMixin
from flask_sqlalchemy import SQLAlchemy
import os, subprocess, bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")

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
    service_name = db.Column(db.String(20), unique = True, nullable = False)
    deploy_key = db.Column(db.String(20), nullable = False)

    owner_id = db.Column(db.Integer, db.ForeignKey("user.id"))

    def __repr__(self):
        return f"(id: {self.id}, name: {self.name}, deploy_key: {self.deploy_key}, owner_id: {self.owner_id})"

@app.route("/")
def home():
    return ""

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
        return f"Security checks passed. \n\"{repo_name}\" deployed with status code {proc.returncode}. \nTerminal output: {fi.read(5000)} \nTerminal errors: {fe.read(5000)}"

if __name__ == "__main__":
    app.run(debug = False)
