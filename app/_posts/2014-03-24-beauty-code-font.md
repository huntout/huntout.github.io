---
layout: post
comments: yes
tags: [Windows, sublime text]
title: "Beauty Code Font on Windows"
photo_url: "4.png"
photo_title: "Beauty Code Font on Windows"
---

在 Windows 上如何呈现漂亮的编程字体显示效果？一是使用合适的渲染软件，二是正确设置字体。

![Sublime Text 效果]({{ site.cdnurl }}{% postfile 4.png %})

MacType
=======

一款模仿 Mac 的字体渲染风格的软件，先看看效果：

![MacType效果对比图]({{ site.cdnurl }}{% postfile 1.png %})

1. 下载安装 [https://code.google.com/p/mactype/]()

2. 配置使用服务模式，最为方便

  ![服务模式]({{ site.cdnurl }}{% postfile 2.png %})

3. 服务已启动

  ![服务已启动]({{ site.cdnurl }}{% postfile 3.png %})

Monaco Font
===========

1. 下载安装字体 [https://github.com/todylu/monaco.ttf]()

2. 注册表 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink`

  新建一个多字符串值 `Monaco`

  ```
  CONSOLA.TTF,Consolas
  SIMSUN.TTC,SimSun
  MINGLIU.TTC,PMingLiU
  MSMINCHO.TTC,MS PMincho
  ```

3. 重新注销登录后生效。

Sublime Text
============

1. Preferences/Settings - User

  ```json
    {
      "font_face": "Monaco"
    }
  ```

**Enjoy it!**
