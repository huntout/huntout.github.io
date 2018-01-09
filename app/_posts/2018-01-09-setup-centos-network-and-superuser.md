---
layout: post
comments: yes
tags: [centos]
title: "CentOS 6.9 配置静态IP与超级用户"
description: "在这个教程我们将学习 CentOS 6.9 minimal 安装好后，如何配置静态IP与超级用户"
---

目标
====

在这个教程我们将学习 CentOS 6.9 minimal 安装好后：

* 如何配置静态IP

* 如何新建超级用户

* 如何禁止root用户远程登录


配置固定IP
=========

    # vi /etc/sysconfig/network-scripts/ifcfg-eth0
    # i

    DEVICE=eth0
    HWADDR=00:8C:FA:15:26:34
    TYPE=Ethernet
    UUID=50c10654-f869-4916-8973-475001ade995
    ONBOOT=yes
    NM_CONTROLLED=yes
    BOOTPROTO=static
    IPADDR=10.200.61.9
    NETMASK=255.255.192.0
    GATEWAY=10.200.1.2
    DNS1=114.114.114.114
    DNS2=8.8.8.8

    # Esc
    # :wq

    # service network restart

新建超级用户
==========

    # adduser newsu
    # passwd newsu
    # visudo

    ## Allow root to run any commands anywhere
    root    ALL=(ALL)       ALL
    newsu   ALL=(ALL)       ALL

禁止root用户远程登录
=================

    # vi /etc/ssh/sshd_config

    PermitRootLogin no

    # service sshd restart

**Enjoy it!**
