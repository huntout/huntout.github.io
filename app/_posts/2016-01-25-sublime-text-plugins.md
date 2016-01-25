---
layout: post
comments: yes
tags: [sublime text]
title: "My Sublime Text 3 Plugins List"
description: "AutoFileName, DocBlockr, EditorConfig, FileDiffs, HTML-CSS-JS Prettify and SublimeLinter."
---

<span id="top"></span>

My Sublime Text 3 Plugins List:

  - [AutoFileName](#AutoFileName)
  - [DocBlockr](#DocBlockr)
  - [EditorConfig](#EditorConfig)
  - [FileDiffs](#FileDiffs)
  - [HTML-CSS-JS Prettify](#HTML-CSS-JS-Prettify)
  - [SublimeLinter](#SublimeLinter)


[<h2 id="AutoFileName">AutoFileName</h2>](https://packagecontrol.io/packages/AutoFileName)

  Sublime Text plugin that autocompletes filenames

  Whether your making a img tag in html, setting a background image in css, or linking a .js file to your html (or whatever else people use filename paths for these days…), you can now autocomplete the filename.

  ![AutoFileName]({{ site.cdnurl }}{% postfile AutoFileName.gif %})


[<h2 id="DocBlockr">DocBlockr</h2>](https://packagecontrol.io/packages/DocBlockr)

  Simplifies writing DocBlock comments in Javascript, PHP, CoffeeScript, Actionscript, C & C++

  ![DocBlockr]({{ site.cdnurl }}{% postfile DocBlockr.gif %})


[<h2 id="EditorConfig">EditorConfig</h2>](https://packagecontrol.io/packages/EditorConfig)

  [EditorConfig](http://editorconfig.org/) helps developers maintain consistent coding styles between different editors

```ini
# .editorconfig

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```


[<h2 id="FileDiffs">FileDiffs</h2>](https://packagecontrol.io/packages/FileDiffs)

  Shows diffs between the current file, or selection(s) in the current file, and clipboard, another file, or unsaved changes. Can be configured to show diffs in an external diff tool

  ![FileDiffs]({{ site.cdnurl }}{% postfile FileDiffs.gif %})


[<h2 id="HTML-CSS-JS-Prettify">HTML-CSS-JS Prettify</h2>](https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify)

  HTML, CSS, JavaScript and JSON code formatter for Sublime Text 2 and 3 via [js-beautify made by Einar Lielmanis](https://github.com/einars/js-beautify).

  ![HTML-CSS-JS Prettify]({{ site.cdnurl }}{% postfile HTML-CSS-JS-Prettify.gif %})

  ```json
  // .jsbeautifyrc

  {
    // Details: https://github.com/victorporof/Sublime-HTMLPrettify#using-your-own-jsbeautifyrc-options
    // Documentation: https://github.com/einars/js-beautify/
    "html": {
      "allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg", "vue"],
      "brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
      "end_with_newline": false, // End output with newline
      "indent_char": " ", // Indentation character
      "indent_handlebars": false, // e.g. {{#foo}}, {{/foo}}
      "indent_inner_html": false, // Indent <head> and <body> sections
      "indent_scripts": "keep", // [keep|separate|normal]
      "indent_size": 2, // Indentation size
      "max_preserve_newlines": 2, // Maximum number of line breaks to be preserved in one chunk (0 disables)
      "preserve_newlines": true, // Whether existing line breaks before elements should be preserved (only works before elements, not inside tags or for text)
      "unformatted": ["a", "span", "img", "code", "pre", "sub", "sup", "em", "strong", "b", "i", "u", "strike", "big", "small", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], // List of tags that should not be reformatted
      "wrap_line_length": 80 // Lines should wrap at next opportunity after this number of characters (0 disables)
    },
    "css": {
      "allowed_file_extensions": ["css", "scss", "sass", "less"],
      "end_with_newline": false, // End output with newline
      "indent_char": " ", // Indentation character
      "indent_size": 2, // Indentation size
      "newline_between_rules": true, // Add a new line after every css rule
      "selector_separator": " ",
      "selector_separator_newline": true // Separate selectors with newline or not (e.g. 'a,\nbr' or 'a, br')
    },
    "js": {
      "allowed_file_extensions": ["js", "json", "jshintrc", "jsbeautifyrc", "babelrc", "eslintrc", "es6"],
      "brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
      "break_chained_methods": false, // Break chained method calls across subsequent lines
      "e4x": false, // Pass E4X xml literals through untouched
      "end_with_newline": false, // End output with newline
      "indent_char": " ", // Indentation character
      "indent_level": 0, // Initial indentation level
      "indent_size": 2, // Indentation size
      "indent_with_tabs": false, // Indent with tabs, overrides `indent_size` and `indent_char`
      "jslint_happy": false, // If true, then jslint-stricter mode is enforced
      "keep_array_indentation": false, // Preserve array indentation
      "keep_function_indentation": false, // Preserve function indentation
      "max_preserve_newlines": 3, // Maximum number of line breaks to be preserved in one chunk (0 disables)
      "preserve_newlines": true, // Whether existing line breaks should be preserved
      "space_after_anon_function": false, // Should the space before an anonymous function's parens be added, `function()` vs `function ()`
      "space_before_conditional": true, // Should the space before conditional statement be added, `if(true)` vs `if (true)`
      "space_in_empty_paren": false, // Add padding spaces within empty paren, `f()` vs `f( )`
      "space_in_paren": false, // Add padding spaces within paren, ie. f( a, b )
      "unescape_strings": false, // Should printable characters in strings encoded in \xNN notation be unescaped, 'example' vs '\x65\x78\x61\x6d\x70\x6c\x65'
      "wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
    }
  }
  ```


[<h2 id="SublimeLinter">SublimeLinter</h2>](https://packagecontrol.io/packages/SublimeLinter)

  A framework for interactive code linting in the Sublime Text 3 editor.

  - [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)

    This linter plugin for SublimeLinter provides an interface to ESLint. It will be used with files that have the “javascript” syntax, or within `<script>` tags in HTML files.

  - [SublimeLinter-jshint](https://packagecontrol.io/packages/SublimeLinter-jshint)

    This linter plugin for SublimeLinter provides an interface to jshint. It will be used with files that have the “JavaScript” syntax, or within `<script>` tags in HTML files.

#### Extra Installations

  ```bash
  npm i -g jshint
  npm i eslint eslint-config-airbnb eslint-plugin-html
  ```

#### SublimeLinter User Settings 

  ```json
  // SublimeLinter.sublime-setting

  {
    "user": {
      "lint_mode": "save only",
      "linters": {
        "eslint": {
          "@disable": false,
          "args": [],
          "excludes": [
            "*.js"
          ]
        },
        "jshint": {
          "@disable": false,
          "args": [],
          "excludes": [
            "*.es6",
            "*.vue"
          ]
        }
      },
      "mark_style": "outline",
      "no_column_highlights_line": true,
      "passive_warnings": false,
      "rc_search_limit": 3,
      "shell_timeout": 10,
      "show_errors_on_save": true,
      "show_marks_in_minimap": true,
      "syntax_map": {
        "html (django)": "html",
        "html (rails)": "html",
        "html 5": "html",
        "javascript (babel)": "javascript",
        "magicpython": "python",
        "php": "html",
        "python django": "python",
        "pythonimproved": "python",
        "vue": "javascript"
      },
      "wrap_find": true
    }
  }
  ```

#### Project Settings

  ```json
  // .eslintrc

  {
    "extends": "airbnb/base",
    "plugins": ["html"],
    "rules": {
      "new-cap": [2, {
        "newIsCap": true,
        "capIsNewExceptions": ["$.Deferred"]
      }],
      "space-before-function-paren": [2, {
        "anonymous": "never",
        "named": "never"
      }],
      "semi": [2, "never"],
    }
  }
  ```

  ```json
  // .jshintrc

  {
    /*
     * ENVIRONMENTS
     * =================
     */
    "browser": true,
    "esnext": true,
    "jasmine": true,
    "node": true,

    /*
     * ENFORCING OPTIONS
     * =================
     */
    "eqeqeq": true,
    "globalstrict": true,
    "indent": 2,
    "newcap": true,
    "quotmark": true,
    "undef": true,
    "unused": true,

    "globals": {
      "require": false,
      "module": false
    },

    /*
     * RELAXING OPTIONS
     * =================
     */
    "eqnull": true
  }
  ```

[Back To Top](#top)

**Enjoy it!**
