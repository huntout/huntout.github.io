---
layout: post
comments: yes
tags: [Windows]
title: "怎样让 Windows XP 识别 WD My Passport 移动硬盘？"
---

有位朋友还在使用 XP 系统，无法识别新买的 [WD My Passport 移动硬盘](http://item.jd.com/1639343.html)。

下面是操作方法：

1. 将移动硬盘插入 USB 口，最好是 PC 机箱后面的 USB 口，前面的 USB 口可能电压不够

2. 首先安装缺失的驱动 [WD SES Driver (32-bit)](http://download.wdc.com/smartware/WD_SES_Driver_Setup_x86.zip)

3. 清除移动硬盘的 GPT 保护分区

  打开 DOS 命令行，运行命令 `diskpart`

  ```
  DISKPART> list disk

  磁盘 ###  状态          大小     可用     Dyn  Gpt
  --------  ------------- -------  -------  ---  --- 
  磁盘 0    联机           465 GB      0 B
  磁盘 1    联机           931 GB      0 B        是

  DISKPART> select disk 1

  磁盘 1 现在是所选磁盘。

  DISKPART> clean all

  清除硬盘所有分区。

  DISKPART> create partition primary

  创建新的 MBR 主分区。

  ```

4. 此时，启动“磁盘管理”可初始化磁盘。

**Enjoy it!**
