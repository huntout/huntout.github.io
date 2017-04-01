---
layout: post
comments: yes
tags: [comments]
title: "迁移多说到disqus"
---

多说6月1日就要关闭了，迁移评论系统为 disqus。

迁移很简单，按照 [disqus](https://disqus.com) 的说明将 `_includes/comments.html` 里的代码替换就OK了。

注意一下几个变量的设置：

```javascript
var disqus_config = function() {
    this.page.url = '{{"{{"}} page.url | prepend: site.baseurl }}';
    this.page.identifier = '{{"{{"}} page.id }}';
};
```

遗憾的是必须科学上网才能正常使用。先这样吧！