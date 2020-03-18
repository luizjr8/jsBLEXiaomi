sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev
sudo apt-get install libcap2-bin
sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)