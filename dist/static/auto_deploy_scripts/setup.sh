#!/bin/bash

# Install Git, cURL, pip3, and virtualenv
if [ ! command -v git &> /dev/null ]
then
    echo "Git not installed. Installing now..."
    sudo apt-get install -y git
    echo "Successfully installed Git."
fi

if [ ! command -v curl &> /dev/null ]
then
    echo "cURL not installed. Installing now..."
    sudo apt-get install -y curl
    echo "Successfully installed cURL."
fi

if [ ! command -v pip3 &> /dev/null ]
then
    echo "cURL not installed. Installing now..."
    sudo apt-get install -y python3-pip
    echo "Successfully installed pip3."
fi

if [ ! command -v virtualenv &> /dev/null ]
then
    echo "cURL not installed. Installing now..."
    sudo apt-get install -y virtualenv
    echo "Successfully installed virtualenv."
fi

curl --output auto_deploy.py https://jimmyliu.dev/static/auto_deploy_scripts/auto_deploy.py
curl --output requirements.txt https://jimmyliu.dev/static/auto_deploy_scripts/requirements.txt
curl --output auto_deploy.service https://jimmyliu.dev/static/auto_deploy_scripts/auto_deploy.service

virtualenv venv
source venv/bin/activate
python3 -m pip install -r requirements.txt
python3 -c "from auto_deploy import db; db.create_all();"
deactivate

sed -i "s/{{path}}/$HOME/g" "auto_deploy.service"
sed -i "s/{{user}}/$USER/g" "auto_deploy.service"

sudo mv auto_deploy.service "/etc/systemd/system"
sudo systemctl daemon-reload
sudo systemctl start auto_deploy
sudo systemctl status auto_deploy

echo "---Setup completed---"
