#!/bin/bash

echo "==> Please enter a username: "
read username

echo "==> Please enter a password (will not be shown): "
read -s password

echo "==> Please re-enter the password (will not be shown): "
read -s confirm

if [ ! $password == $confirm ]
then
    echo "Error: passwords do not match"
    exit 1
fi

clear
echo "Setting up new user '$username'..."

python3 -c "from auto_deploy import db, User; import bcrypt; user = User(username = '$username', password = bcrypt.hashpw(b'$password', bcrypt.gensalt())); db.session.add(user); db.session.commit();"
