---
layout: post
comments: yes
tags: [cordova, android]
title: "Extending Android Build Files In Cordova"
---

最近流行 [Cordova].

- Mobile apps with HTML, CSS & JS
- Target multiple platforms with one code base
- Free and open source
- Support platforms: android, iOS, amazon-fireos, blackberry10, browser, firefoxos, webos, windows, windows8, wp8
- Reusable code across platforms
- Support for offline scenarios
- Access native device APIs

在新的 Android 项目试用了一下，感觉不错。结合 [Webpack] 及 [Vuejs] 形成了一个可以在 browser 端调试，最后打包成 APK，并且支持单元测试及 E2E 测试的前端脚手架，有时间我会把这个脚手架开源。

### 问题

项目中使用了 `phonegap-plugin-barcodescanner`，该插件带了十几种本地语言包，`cordova build --release` 时会报告 `MissingTranslation` 错误。

最直接的解决方法是在 `platforms/android/build.gradle` 中增加

```
android {
  lintOptions {
      disable 'MissingTranslation'
      disable 'ExtraTranslation'
  }
}
```

问题是 `build.gradle` 会在 build 过程中被覆盖，同时 `platforms` 目录是被 git ignore 的。

### 解决方案

Cordova 提供了 hooks 功能，可以很好的解决这个问题：

`hooks/before_build/beforeBuild.js`

```javascript
#!/usr/bin/env node

var path = require('path');
var fs = require('fs-extra');

var projectRoot = process.argv[2];
var src = path.join(projectRoot, 'platforms_extras');
var dest = path.join(projectRoot, 'platforms');

try {
  fs.copySync(src, dest);
  console.log('Copy platforms extra files.');
} catch (err) {
  console.error(err.message);
}
```

`platforms_extras/android/build-extras.gradle`

```
android {
  lintOptions {
      disable 'MissingTranslation'
      disable 'ExtraTranslation'
  }
}
```

**Enjoy it!**

[Cordova]: https://cordova.apache.org/
[Webpack]: https://webpack.github.io/
[Vuejs]: http://vuejs.org/
