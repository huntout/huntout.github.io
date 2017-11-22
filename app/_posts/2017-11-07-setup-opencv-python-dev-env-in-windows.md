---
layout: post
comments: yes
tags: [opencv, python]
title: "在 Windows 上安装 OpenCV-Python 开发环境"
photo_url: "opencv.png"
photo_title: "Setup OpenCV-Python in Windows"
---

目标
====

在这个教程我们将学习

* 如何在 Windows 上安装 OpenCV-Python

* 如何在 Visual Code 上安装配置 Python 插件


安装 Python2 以及 pip
====================

1. 如果你已经安装了 Python 2.7.9+，请跳过这一节

2. 如果你安装的是 Python 2 ≤ 2.7.8，请按以下说明安装 pip

    2.1. 参考 [pip 官方说明](https://pip.pypa.io/en/stable/installing/#do-i-need-to-install-pip)

    2.2. 下载 [`get-pip.py`](https://bootstrap.pypa.io/get-pip.py)

    2.3. 运行

        python get-pip.py

    2.4. 升级 pip

        python -m pip install -U pip

3. 如果你没有安装 Python，请直接安装 [Python 2.7.14](https://www.python.org/ftp/python/2.7.14/python-2.7.14.msi)

安装 OpenCV
==========

1. 安装 `numpy`

    ```
    python -m pip install numpy
    ```

2. 打开 Python IDLE 输入

    ```
    >>> import numpy
    ```

    验证是否安装成功

3. 从 [Sourceforge](https://sourceforge.net/projects/opencvlibrary/files/latest/download) 下载最新的 OpenCV release 并且运行解压缩

4. 打开解压缩后的目录 `opencv/build/python/2.7`

5. 拷贝 `cv2.pyd` 到 `C:/Python27/lib/site-packeges`

6. 打开 Python IDLE 输入

    ```
    >>> import cv2
    >>> print cv2.__version__
    ```

    验证是否安装成功

安装配置 VS Code Python 插件
==========================

1. 安装 Python 插件

    ![VSCode Python]({{ site.cdnurl }}{% postfile vscode-python.png %})

2. 根据需要安装 Python 的 pylint 模块

    ![VSCode Pylint]({{ site.cdnurl }}{% postfile vscode-pylint.png %})

    ```
    python -m pip install pylint
    ```

**Enjoy it!**
