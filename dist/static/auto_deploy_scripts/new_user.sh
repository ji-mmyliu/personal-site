#!/bin/bash

echo "==> Please enter a username: "
read username

echo "==> Please enter a password: "
read password

clear
echo "Setting up new user '$username'..."

python3 -c "from auto_deploy import db, User; import bcrypt; user = User(username = '$username', password = bcrypt.hashpw(b'$password', bcrypt.gensalt())); db.session.add(user); db.session.commit();"
