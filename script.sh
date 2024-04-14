#!/bin/bash

sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update

sudo apt-get install bash libssh2-1-dev libssh-dev libssl-dev libaio-dev mysql-server php7.4-cli php7.4-gd php7.4-imap php7.4-mysql php7.4-curl libmysqlclient-dev build-essential libmatheval-dev libmagic-dev libgd-dev libuv1 rsync valgrind-dbg libxml2-dev php7.4-readline cmake ssh make libsmbclient-dev libwebsockets-dev libsqlite3-dev
cd friendup
echo "USE_SSH_THREADS_LIB=0" >> Config
echo "OPENSSL_INTERNAL=1" >> Config
make clean setup
make compile
make install
sudo mysql
create user shartmunk@localhost identified by "abc123";
create database frienddb;
use frienddb;
source db/FriendCoreDatabase.sql;
grant all privileges on frienddb.* to shartmunk@localhost;
flush privileges;
exit
clear
echo "Please configure FriendOS by referring to https://github.com/FriendUPCloud/friendup/blob/master/ConfiguringFriendOS.md and editing the file at build/cfg/cfg.ini"
echo "The script will now exit."
