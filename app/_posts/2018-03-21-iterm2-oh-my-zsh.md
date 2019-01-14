---
layout: post
comments: yes
tags: [macOS, terminal]
title: "iTerm2 and oh-my-zsh"
---

> iTerm2 is terminal emulator for macOS that amazing things.

![iTerm2](http://iterm2.com/img/logo2x.jpg)

> Oh My Zsh is an open source, community-driven framework for managing your zsh configuration.

![Oh My Zsh](https://camo.githubusercontent.com/5c385f15f3eaedb72cfcfbbaf75355b700ac0757/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f686d797a73682f6f682d6d792d7a73682d6c6f676f2e706e67)

## Download and install

* [iTerm2](http://iterm2.com/downloads.html)
* [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

## Patch custom font for the special characters

```bash
git clone https://github.com/powerline/fontpatcher.git
cd fontpatcher
./setup.py build
sudo ./setup.py install
brew install fontforge
fontforge scripts/powerline-fontpatcher /System/Library/Fonts/Monaco.dfont
cp "Monaco for Powerline.otf" "$HOME/Library/Fonts/"
```

## iTerm2 Preferences

    Profiles -> Colors -> Color Presets -> Solarized Dark
             -> Text -> Text Rendering -> Uncheck "Draw bold text in bright colors"
             -> Text -> Font -> 14pt Monaco for Powerline

## iTerm2 HotKeys

* `⌃ + u`：清空当前行
* `⌃ + a`：移动到行首
* `⌃ + e`：移动到行尾
* `⌃ + f`：向前移动
* `⌃ + b`：向后移动
* `⌃ + p`：上一条命令
* `⌃ + n`：下一条命令
* `⌃ + r`：搜索历史命令
* `⌃ + y`：召回最近用命令删除的文字
* `⌃ + h`：删除光标之前的字符
* `⌃ + d`：删除光标所指的字符
* `⌃ + w`：删除光标之前的单词
* `⌃ + k`：删除从光标到行尾的内容
* `⌃ + t`：交换光标和之前的字符

## oh-my-zsh theme

* [agnoster](https://github.com/robbyrussell/oh-my-zsh/wiki/Themes#agnoster)

```bash
## ~/.zshrc
ZSH_THEME="agnoster"
DEFAULT_USER="huntout"
```

## oh-my-zsh plugins

```bash
brew install autojump
brew install zsh-syntax-highlighting
```
