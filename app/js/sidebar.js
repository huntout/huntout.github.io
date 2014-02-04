(function() {
  var sidebarAdjustTimer;
  var updateOrientation = function() {
    if (sidebarAdjustTimer) {
      clearInterval(sidebarAdjustTimer);
    }
    //console.log('window.orientation -> '+window.orientation);
    if (window.orientation === -90 || window.orientation === 90) {
      // landscape
      var sidebar = document.getElementById('sidebar');
      if (!sidebar.src || sidebar.src === '') {
        sidebar.src = '/archive/sidebar.html';
      }
      sidebarAdjustTimer = setInterval(function() {
        var height = Math.round(document.height * 1.6);
        if (sidebar.height !== height) {
          sidebar.height = height;
          sidebar.style.height = height + 'px';
        }
      }, 500);
    } else {
      // portrait
    }
  };
  var handler = function() {
    if (document.getElementById('sidebar')) {
      document.removeEventListener('DOMSubtreeModified', handler);
      updateOrientation();
    }
  };
  if (window.addEventListener) {
    window.addEventListener('orientationchange', updateOrientation);
    document.addEventListener('DOMSubtreeModified', handler);
  }
})();
