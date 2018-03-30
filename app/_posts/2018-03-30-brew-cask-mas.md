---
layout: post
comments: yes
tags: [macOS]
title: "brew, brew cask, mas"
photo_url: "homebrew.png"
photo_title: "brew, brew cask, mas"
---

在 macOS 上用命令行管理安装软件包以及 apps。 

> [Homebrew]: The missing package manager for macOS.

> [Homebrew-Cask] extends Homebrew and brings its elegance, simplicity, and speed to macOS applications and large binaries alike.

> [mas-cli]: A simple command line interface for the Mac App Store. Designed for scripting and automation.

## Install

```bash
# brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
# cask & cask-upgrade
brew tap caskroom/cask
brew tap buo/cask-upgrade
# mas
brew install mas
```

## Usage

```bash
# brew
brew list
brew search [--desc] (_text_|/_text_/)
brew install _formula_
brew outdated
brew upgrade
# cask
brew cask list
brew cask search _text_
brew cask install _formula_
brew cu
# mas
mas list
mas search _text_
mas install _appid_
mas outdated
mas upgrade
```

[Homebrew]: https://brew.sh/
[Homebrew-Cask]: http://caskroom.github.io/
[mas-cli]: https://github.com/mas-cli/mas
