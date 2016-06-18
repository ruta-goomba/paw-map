curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm cache clean -f 
sudo npm install -g n
sudo n 6.2.0
sudo ln -sf /usr/local/n/versions/node/6.2.0/bin/node /usr/bin/node
# to enable to run node on port 80
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep /usr/local/bin/node
cd /
sudo mkdir pawmap
cd /pawmap
