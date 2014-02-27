---
title: "使用Jekyll与GitHub Pages构建网站"
description: "本博开篇，按例介绍一下使用 Jekyll 与 GitHub Pages 构建网站的流程，一为后来者造福，二为自己留个记录。"
photo_url: "octojekyll-topleft.png"
photo_title: "Jekyll & GitHub"
layout: post
tags: jekyll
comments: yes
---
![]({% postfile octojekyll.png %})

本博开篇，按例介绍一下使用 [Jekyll](http://jekyllrb.com/) 与 [GitHub Pages](http://pages.github.com/) 构建网站的流程，一为后来者造福，二为自己留个记录。

## 准备

我搭建的过程大部分也是乘着前人栽树的阴凉，下面是我建议的**阅读清单**：

- [搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门 (阮一峰)](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)
  
  看完你应该有整体概念了，但这是 2012年写的，现在GitHub 除了支持 Project site (`gh_pages` branch)，还支持 User or organization site (`username.github.io` repository)。

- [Running Jekyll on Windows (Madhur Ahuja)](http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html)

  在 Windows 上安装运行 Jekyll。

- [Using Jekyll with Pages (GitHub help)](https://help.github.com/articles/using-jekyll-with-pages)

  本篇重点在搭建与 GitHub Pages 相同的 Jekyll 环境，保证本地调试与最终发布的页面一致。
  
  特别说明一下，我的Gemfile如下
  
  ```ruby
  source 'http://ruby.taobao.org'
  gem 'github-pages'
  gem 'wdm'
  ```
  - 使用了淘宝搭建的 [RubyGems 镜像](http://ruby.taobao.org)
  - `wdm`: Windows Directory Monitor (WDM) is a library which can be used to monitor directories for changes.

## 步骤

- My OS: Windows 7 64 bits

- Install [Ruby 1.9](http://rubyinstaller.org/downloads/)

  Add `C:\Ruby193\bin` to Path

- Install [Ruby Development Kit for Ruby 1.9](http://rubyinstaller.org/downloads/)
  
  Extract it to `C:\devkit`
  
  ```
  C:\devkit>ruby dk.rb init
  C:\devkit>ruby dk.rb install
  C:\devkit>ruby -v
  ruby 1.9.3p484 (2013-11-22) [i386-mingw32]
  ```

- Install [Which and Wget for Windows](http://gnuwin32.sourceforge.net/packages.html)

  Add `C:\Program Files (x86)\GnuWin32\bin` to Path

  ```
  C:\>which which
  C:\Program Files (x86)\GnuWin32\bin\which.EXE
  C:\>which wget
  C:\Program Files (x86)\GnuWin32\bin\wget.EXE
  ```

- Install Python

  ```
  C:\temp>wget -nc python.org/ftp/python/2.7.2/python-2.7.2.msi
  C:\temp>msiexec -qn -i python-2.7.2.msi ADDLOCAL="DefaultFeature"
  ```
  Add `C:\Python27` to Path

- Install easy_install

  ```
  C:\temp>wget -nc peak.telecommunity.com/dist/ez_setup.py
  C:\temp>python ez_setup.py
  ```
  Add `C:\Python27\Scripts` to Path

- Install Pygments

  ```
  C:\>easy_install Pygments
  ```

  ```diff
--- C:\Ruby193\lib\ruby\gems\1.9.1\gems\pygments.rb-0.5.4\lib\pygments\popen.rb
+++ C:\Ruby193\lib\ruby\gems\1.9.1\gems\pygments.rb-0.5.4\lib\pygments\popen.rb (Unsaved)
@@ -46,8 +46,8 @@
     # something like that.
     def python_binary
       @python_binary ||= begin
-        `which python2`
-        $?.success? ? "python2" : "python"
+        `which python`
+        $?.success? ? "python" : "python2"
       end
     end
  ```

- Install bundler
  
  ```
  C:\>gem install bundler
  ```

- Create your Github Pages repository
  - Fork [rsms.github.com](https://github.com/huntout/rsms.github.com)
  - Rename repository to `yourname.github.io`
  - Edit `CNAME` to match your domain

- Clone `yourname.github.io` to locale

  ```
  C:\>git clone git@github.com:yourname/yourname.github.io.git
  ```

  > 由于 GitHub Pages 不支持自定义 [plugins](http://jekyllrb.com/docs/plugins/)，我采用了 [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb)。源文件在 `yo` 分支，使用 Grunt 自动编译发布到 `master` 分支。(Updated on Feb 05, 2014)

- Bundle
  
  ```
  C:\yourname.github.io>bundle install
  C:\yourname.github.io>bundle exec jekyll serve --watch
  ```

- if you meet `error: Invalid argument - C:/yourname.github.io/_site/C:.`

  ```diff
--- C:\Ruby193\lib\ruby\gems\1.9.1\gems\jekyll-1.4.3\lib\jekyll\page.rb
+++ C:\Ruby193\lib\ruby\gems\1.9.1\gems\jekyll-1.4.3\lib\jekyll\page.rb (Unsaved)
@@ -133,7 +133,7 @@
     #
     # Returns the destination file path String.
     def destination(dest)
-      path = File.join(dest, File.expand_path(self.url, "/"))
+      path = File.join(dest, self.url)
       path = File.join(path, "index.html") if self.url =~ /\/$/
       path
     end
  ```

  ```diff
--- C:\Ruby193\lib\ruby\gems\1.9.1\gems\jekyll-1.4.3\lib\jekyll\post.rb
+++ C:\Ruby193\lib\ruby\gems\1.9.1\gems\jekyll-1.4.3\lib\jekyll\post.rb (Unsaved)
@@ -266,7 +266,7 @@
     # Returns destination file path String.
     def destination(dest)
       # The url needs to be unescaped in order to preserve the correct filename
-      path = File.join(dest, File.expand_path(CGI.unescape(self.url), "/"))
+      path = File.join(dest, CGI.unescape(self.url))
       path = File.join(path, "index.html") if path[/\.html$/].nil?
       path
     end
  ```

**Enjoy it!**