iTerm2 & oh-my-zsh

Download and install
    http://iterm2.com/downloads.html
    https://github.com/robbyrussell/oh-my-zsh/

Set theme
    https://github.com/robbyrussell/oh-my-zsh/wiki/Themes#agnoster

~/.zshrc
    ZSH_THEME="agnoster"
    DEFAULT_USER="huntout"

Patch custom font for the special characters
    git clone https://github.com/powerline/fontpatcher.git
    cd fontpatcher
    ./setup.py build
    sudo ./setup.py install
    brew install fontforge
    fontforge scripts/powerline-fontpatcher /System/Library/Fonts/Monaco.dfont
    cp "Monaco for Powerline.otf" "$HOME/Library/Fonts/"

iTerm2 Preferences
    Profiles -> Colors -> Color Presets -> Solarized Dark
             -> Text -> Font -> 14pt Monaco for Powerline