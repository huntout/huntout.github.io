(function(f) {
  var onload = function(f) {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', f, false);
    } else {
      window.attachEvent('onload', f);
    }
  };
  onload(function() {
    f();
    if (window.addEventListener) {
      window.addEventListener('resize', f, false);
    } else {
      window.attachEvent('resize', f);
    }
  });
})(function() {
  var winw = window.innerWidth,
    w = window.__post_grid_width;

  if ((w !== undefined) &&
    ((w === 680 && winw < 680) ||
      (w === 780 && winw >= 680 && winw < 780) ||
      (w === 880 && winw >= 780 && winw < 880) ||
      (w === 980 && winw >= 880 && winw < 980) ||
      (w === 10000 && winw >= 980)
    )
  ) {
    return;
  } else {
    window.__post_grid_width = w =
      winw > 980 ? 10000 :
      winw > 880 ? 980 :
      winw > 780 ? 880 :
      winw > 680 ? 780 :
      680;
  }

  var posts = document.getElementById('recent-posts'),
    child_nodes = posts.childNodes,
    k,
    node,
    node_count = 0,
    col0 = {},
    col1 = {},
    is_col0,
    row0 = {},
    ELEMENT_NODE = Node ? Node.ELEMENT_NODE : 1;

  posts.style.position = (window.__post_grid_width <= 680) ? 'static' : 'relative';

  for (k = 0; k < child_nodes.length; k++) {
    node = child_nodes[k];
    if (node.nodeType !== ELEMENT_NODE) {
      continue;
    }
    if (node.className === 'breaker') {
      if (window.__post_grid_width <= 680) {
        node.style.height = null;
      } else {
        node.style.height = (Math.max(col0.y, col1.y) - row0.y) + 'px';
      }
      break;
    }
    if (col0.y === undefined) {
      col0.x = 0;
      col0.y = node.clientHeight - 1;
      col0.w = node.clientWidth;
      row0.y = col0.y;
    } else {
      if (col1.y === undefined) {
        col1.x = col0.w - 1;
        col1.y = 0;
        col1.w = col0.w + 1;
      }
      if (window.__post_grid_width <= 680) {
        node.style.position = 'static';
        node.style.width = null;
        node.style.left = null;
        node.style.top = null;
      } else {
        is_col0 = col0.y <= col1.y + 5;
        node.style.position = 'absolute';
        if (is_col0) {
          // node.style.width = col0.w + 'px';
          node.style.left = col0.x + 'px';
          node.style.top = col0.y + 'px';
          col0.y += node.clientHeight - 1;
        } else {
          node.style.width = col1.w + 'px';
          node.style.left = col1.x + 'px';
          node.style.top = col1.y + 'px';
          col1.y += node.clientHeight - 1;
        }
      }
    }
    node_count++;
    // console.debug(
    //   node_count,
    //   node.offsetTop,
    //   node.offsetLeft + node.clientWidth,
    //   node.offsetTop + node.clientHeight,
    //   node.offsetLeft
    // );
  }
});
