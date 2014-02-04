(function() {
  var search_field = document.getElementById('cse-search-field');
  var clearBackground = function() {
    search_field.style.background = 'none';
  };
  clearBackground();
  search_field.style.padding = '0.5em 1em';
  if (window.agentIsIOS) {
    search_field.type = 'search';
  } else {
    search_field.select();
    search_field.focus();
  }
  if (search_field.addEventListener) {
    search_field.addEventListener('blur', clearBackground, false);
  } else {
    search_field.attachEvent('onblur', clearBackground);
  }
})();
