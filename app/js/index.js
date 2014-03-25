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
      (w === 10000 && winw >= 780)
    )
  ) {
    // console.log('noop w:', w + ', winw:', winw);
    return;
  } else {
    window.__post_grid_width = w =
      winw > 780 ? 10000 :
      winw > 680 ? 780 :
      680;
    // console.log('op w:', w);
  }

  var posts = document.getElementById('recent-posts'),
    child_nodes = posts.childNodes,
    k,
    node,
    origin = {},
    col0 = {},
    col1 = {},
    node_count = 0,
    is_col0,
    row0_max_y,
    ELEMENT_NODE = Node ? Node.ELEMENT_NODE : 1;

  posts.style.position = (window.__post_grid_width <= 680) ? 'static' : 'relative';

  for (k in child_nodes) {
    if (k === 'length') {
      continue;
    }
    node = child_nodes[k];
    if (node.nodeType === ELEMENT_NODE) {
      if (node.className === 'breaker') {
        if (window.__post_grid_width <= 680) {
          node.style.height = null;
        } else {
          node.style.height = (Math.max(col0.y, col1.y) - row0_max_y) + 'px';
        }
        break;
      }
      if (col0.y === undefined) {
        origin.x = node.offsetLeft;
        origin.y = node.offsetTop;
        origin.w = node.clientWidth;
        col0.x = origin.x;
        col0.y = origin.y + node.clientHeight;
        row0_max_y = col0.y;
      } else {
        if (col1.y === undefined) {
          col1.x = origin.x + node.clientWidth;
          col1.y = origin.y;
          if (col1.y + node.clientHeight > row0_max_y) {
            row0_max_y = col1.y + node.clientHeight;
          }
        }
        if (window.__post_grid_width <= 680) {
          // console.log('Clear');
          node.style.position = 'static';
          node.style.width = null;
          node.style.left = null;
          node.style.top = null;
        } else {
          is_col0 = col0.y < col1.y;
          node.style.position = 'absolute';
          node.style.width = origin.w + 'px';
          if (is_col0) {
            node.style.left = col0.x + 'px';
            node.style.top = col0.y + 'px';
            col0.y += node.clientHeight;
          } else {
            node.style.left = col1.x + 'px';
            node.style.top = col1.y + 'px';
            col1.y += node.clientHeight;
          }
        }
      }
      // console.log(node_count, [node.offsetLeft, node.offsetTop, node.clientWidth, node.clientHeight]);
      ++node_count;
    }
  }
});
