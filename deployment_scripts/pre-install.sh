if [ -d /pawmap ]; then
    rm -rf /pawmap
fi

# clean up
sudo rm -rf /var/lib/apt/lists/*
sudo apt-get clean

# set up code deploy - currently manual execution on instance launch
##sudo apt-get -y update
##sudo apt-get -y install awscli
##sudo apt-get -y install ruby2.0
##cd /home/ubuntu
##sudo aws s3 cp s3://aws-codedeploy-eu-west-1/latest/install . --region eu-west-1
##sudo chmod +x ./install
##sudo ./install auto

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm cache clean -f
sudo npm install -g n
sudo n 6.2.0
sudo ln -sf /usr/local/n/versions/node/6.2.0/bin/node /usr/bin/node
sudo apt-get -y update
sudo apt-get -y install nginx
sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/nginx.conf
cd /
sudo mkdir pawmap
cd /pawmap
