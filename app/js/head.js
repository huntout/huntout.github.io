(function() {
  if (window.navigator.userAgent.indexOf('iPad') !== -1) {
    document.documentElement.className = 'ios ipad';
    window.agentIsIOS = 'ipad';
  } else if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
    document.documentElement.className = 'ios iphone';
    window.agentIsIOS = 'iphone';
  }
})();
