curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm cache clean -f 
sudo npm install -g n
sudo n 6.2.0
sudo ln -sf /usr/local/n/versions/node/6.2.0/bin/node /usr/bin/node
cd /
mkdir pawmap
cd /pawmap
