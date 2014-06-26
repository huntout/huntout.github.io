---
layout: post
comments: yes
tags: [Windows]
title: "Windows Update 错误 80070020"
---

近期 Windows 自动更新时遇到 80070020 错误。

查询[微软帮助](http://windows.microsoft.com/zh-cn/windows/windows-update-error-80070020#1TC=windows-7)：

  > 如果收到 Windows Update 错误 80070020，原因可能是计算机上运行的程序干扰了 Windows Update。此问题通常可通过重新启动电脑并再次运行 Windows Update 解决。

  > 如果你在重新启动电脑并运行 Windows Update 之后仍收到错误 80070020，则说明该干扰程序（例如防病毒程序）可能在你第一次启动电脑时就自动运行了。在此情况下，你需要重新启动计算机并且不要运行那些在 Windows 第一次启动时就运行的程序。可通过以下两种方法完成此操作：一种是以安全模式启动计算机，另一种是手动启动 Windows 而不启动程序（也称为干净重新启动）。

OK，马上进入安全模式，然后通过单击「开始」按钮，打开 “Windows Update”（在搜索框中，键入更新，然后在结果列表中单击 “Windows Update”）。

What？系统提示安全模式下无法启动 Windows Update。

那就启用 B 计划，“干净重新启动”：

  1. 单击“开始”按钮，在搜索框中键入 msconfig，然后单击‌ “msconfig.exe”。如果系统提示您输入管理员密码或进行确认，请键入该密码或提供确认。

  2. 在“常规”选项卡上，单击“选择性启动”，然后清除“加载启动项”复选框。

  ![禁用所有启动项]({{ site.cdnurl }}{% postfile 1.png %})

  3. 依次单击“服务”、“隐藏所有 Microsoft 服务”，然后单击“全部禁用”。

  ![禁用全部非 Microsoft 服务]({{ site.cdnurl }}{% postfile 2.png %})

  4. 单击“确定”，然后单击“重新启动”。

  5. 通过单击「开始」按钮，打开 “Windows Update”。 在搜索框中，键入更新，然后在结果列表中单击 “Windows Update”。

  6. 在左窗格中，单击“检查更新”，然后等待 Windows 查找计算机的最新更新。

  7. 如果找到任何更新，请单击“安装更新”。如果系统提示您输入管理员密码或进行确认，请键入该密码或提供确认。

  8. 在安装完更新之后，重新启动计算机。单击“开始”按钮，在搜索框中键入 msconfig，然后单击 “msconfig.exe”。如果系统提示您输入管理员密码或进行确认，请键入该密码或提供确认。

  9. 在“常规”选项卡上，单击“正常启动”，再单击“确定”，然后单击“重新启动”。

**Enjoy it!**
