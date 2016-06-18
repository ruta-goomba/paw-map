curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm cache clean -f 
sudo npm install -g n
sudo n 6.2.0
sudo ln -sf /usr/local/n/versions/node/6.2.0/bin/node /usr/bin/node
sudo apt-get -y update
sudo apt-get -y install nginx
sudo rm /etc/nginx/nginx.conf
cd /
sudo mkdir pawmap
cd /pawmap
