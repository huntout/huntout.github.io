---
layout: post
comments: yes
tags: [sublime text, Windows]
title: "Windows 下建立文件及文件夹的 “Open with Sublime Text 2” 右键菜单"
---

一般建立 “Open With Sublime Text” 右键菜单的办法是[导入注册表文件](http://superuser.com/questions/412312/can-i-right-click-a-folder-in-windows-7-and-choose-open-with-sublime-text)，但是你可能使用的是 Sublime Text 2 的 Portable 版本，还需要修改 `.reg` 文件中 `sublime_text.exe` 的路径，这里给出**更好的**办法。

## 步骤

- 把以下保存成 `.bat` 文件

  ```bat
  set ST_BIN="""%~dp0sublime_text.exe"""

  reg add "HKCR\*\shell\Sublime Text 2"                            /ve       /d "Open with Sublime Text 2"       /f
  reg add "HKCR\*\shell\Sublime Text 2"                            /v "Icon" /d "%ST_BIN%,0"                     /f
  reg add "HKCR\*\shell\Sublime Text 2\command"                    /ve       /d "%ST_BIN% """%%1""""             /f

  reg add "HKCR\Directory\shell\Sublime Text 2"                    /ve       /d "Open Folder as Sublime Project" /f
  reg add "HKCR\Directory\shell\Sublime Text 2"                    /v "Icon" /d "%ST_BIN%,0"                     /f
  reg add "HKCR\Directory\shell\Sublime Text 2\command"            /ve       /d "%ST_BIN% """%%V""""             /f

  reg add "HKCR\Directory\Background\shell\Sublime Text 2"         /ve       /d "Open Folder as Sublime Project" /f
  reg add "HKCR\Directory\Background\shell\Sublime Text 2"         /v "Icon" /d "%ST_BIN%,0"                     /f
  reg add "HKCR\Directory\Background\shell\Sublime Text 2\command" /ve       /d "%ST_BIN% """%%V""""             /f

  @echo.
  @pause
  ```

- 放到 `sublime_text.exe` 所在目录下
- 以管理员身份运行该 `.bat`

## 说明

- 在文件上点右键会出现 "Open with Sublime Text 2"
- 在文件夹或资源管理器的背景空白处点右键会出现 "Open Folder as Sublime Project"
- 带有 `/v "Icon"` 的那几行是增加菜单项前的图标，如果你不需要可以删掉它
- 注意参数中的用到的 `"""`，参考[这里](http://stackoverflow.com/questions/7760545/cmd-escape-double-quotes-in-parameter)

**Enjoy it!**