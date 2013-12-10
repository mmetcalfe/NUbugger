# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "precise32"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"

  config.vm.hostname = "npvagrant"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine.
  config.vm.network :forwarded_port, guest: 12000, host: 12000
  config.vm.network :forwarded_port, guest: 9090, host: 9090

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/home/vagrant/nubots/NUbugger"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.

  # config.vm.provider :virtualbox do |vb|
  #   # Don't boot with headless mode
  #   # vb.gui = true
  
  #   # Use VBoxManage to customize the VM. For example to change memory:
  #   vb.customize ["modifyvm", :id, "--memory", "2048"]
  #   vb.customize ["modifyvm", :id, "--ioapic", "on"]
  #   vb.customize ["modifyvm", :id, "--cpus", "2"]
  #   vb.customize ["modifyvm", :id, "--hwvirtex", "on"]
  # end
  
  $script = <<SCRIPT
sudo apt-get update;
sudo apt-get install -y python-software-properties;
sudo add-apt-repository -y ppa:chris-lea/zeromq;
sudo add-apt-repository -y ppa:chris-lea/node.js;
sudo apt-get update;
sudo apt-get install -y \
      build-essential   \
      pkg-config        \
      libzmq3-dev       \
      uuid-dev          \
      nodejs;
cd ~/nubots/NUbugger;
npm install zmq;
npm install qs;
npm install formidable;
npm install socket.io-client;
SCRIPT

  config.vm.provision "shell", inline: $script
end
