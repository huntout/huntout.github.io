---
layout: post
comments: yes
tags: [mock, webpack]
title: "Mocking a Module's Dependencies of webpack"
---

最近的项目中使用了 webpack 及 karma 进行单元测试，遇到的问题是如何 mocking 需测试模块中的 dependencies.

[Kentor] 的文章给了答案：

> One way to achieve this is to use [rewire] and its webpack version [rewire-webpack]. Rewire can be used to change private variables in a module.

### 安装

```bash
npm i rewire rewire-webpack --save-dev
```

### 配置

```javascript
// karma.conf.js
var RewirePlugin = require('rewire-webpack');

module.exports = function(config) {

  config.set({
    ...
    webpack: {
      // webpack configuration
      plugins: [
        new RewirePlugin()
      ]
    }
  });
};
```

### 测试

```javascript
// module.js
var ActionModal = require('./ActionModal');

module.exports = {
  alert: function(msg) {
    ActionModal.alert(msg);
  }
};

// spec.js
var rewire = require('rewire');

describe('module', function() {

  var module = rewire('./module');
  var ActionModal = jasmine.createSpyObj('ActionModal', ['alert']);
  module.__set__('ActionModal', ActionModal);

  it('alert', function() {
    module.alert('msg');
    expect(ActionModal.alert).toHaveBeenCalledWith('msg');
  });
});

```

**Enjoy it!**

[Kentor]: http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/
[rewire]: https://github.com/jhnns/rewire
[rewire-webpack]: https://github.com/jhnns/rewire-webpack
