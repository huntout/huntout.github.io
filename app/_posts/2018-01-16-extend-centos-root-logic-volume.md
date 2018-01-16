---
layout: post
comments: yes
tags: [centos]
title: "CentOS 6.9 移除 home lv 并扩展 root lv"
description: "CentOS 6.9 默认安装好后，空余空间都在 home lv 上，如何把空间扩展到 root lv 上？"
photo_url: "centos.png"
photo_title: "Extend root LV"
---

问题
===

CentOS 6.9 minimal 按默认安装好后：

    # df -h

        Filesystem                    Size  Used Avail Use% Mounted on
        /dev/mapper/VolGroup-lv_root   50G  687M   46G   2% /
        tmpfs                          32G     0   32G   0% /dev/shm
        /dev/md126p2                  477M   27M  425M   6% /boot
        /dev/md126p1                  200M  264K  200M   1% /boot/efi
        /dev/mapper/VolGroup-lv_home  790G   69M  750G   1% /home

空余空间都在 home lv 上，如何把空间扩展到 root lv 上？

移除 home lv
===========

    # umount /home
    # lvchange -an /dev/VolGroup/lv_home
    # lvremove /dev/VolGroup/lv_home
    # vi /etc/fstab

        /dev/mapper/VolGroup-lv_home /home               ext4    defaults        1 2
        # dd 这一行

扩展 root lv
===========

    # lvextend -l +100%FREE /dev/VolGroup/lv_root
        Size of logical volume VolGroup/lv_root changed from 50.00 GiB (12800 extents)
        to 852.69 GiB (218289 extents).
        Logical volume lv_root successfully resized.

    # lvdisplay

    # resize2fs -p /dev/VolGroup/lv_root
        resize2fs 1.41.12 (17-May-2010)
        Filesystem at /dev/VolGroup/lv_root is mounted on /; on-line resizing required
        old desc_blocks = 4, new_desc_blocks = 54
        Performing an on-line resize of /dev/VolGroup/lv_root to 223527936 (4k) blocks.
        The filesystem on /dev/VolGroup/lv_root is now 223527936 blocks long.

    # df -h
        Filesystem                      Size  Used Avail Use% Mounted on
        /dev/mapper/VolGroup-lv_root    840G  707M  796G   1% /
        tmpfs                            32G     0   32G   0% /dev/shm
        /dev/md126p2                    477M   27M  425M   6% /boot
        /dev/md126p1                    200M  264K  200M   1% /boot/efi

    # reboot

根据磁盘大小命令 resize2fs 可能会需要很长时间，800G大概需要20分钟，请有耐心一些。

如果有别的办法可以快一些，敬请留言，谢谢！
