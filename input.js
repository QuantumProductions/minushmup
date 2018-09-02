mouse = function(e) {
  return {x: e.clientX, y: e.clientY};
}

var mousecoords = {x: 0, y: 0};
window.onmousemove = function(e) {
    mousecoords = mouse(e);
    mousecoords.x -= 32;
    mousecoords.y -= 32;
};

onKeyUp = function(event) {
  key_down_map[this.key_map[event.keyCode]] = false;
  key_up_map[this.key_map[event.keyCode]] = true;
}

onKeyDown = function(event) { 
  key_down_map[this.key_map[event.keyCode]] = true;
  key_up_map[this.key_map[event.keyCode]] = false;
}

addEventListener("keydown", onKeyDown, true);
addEventListener("keyup", onKeyUp, true);
key_down_map = {};
var key_depressing_map = {};
var key_pressing_map = {};
var key_up_map = {};
var key_map = {
      27: 'ESC',
      37: 'L1',
      38: 'U1',
      39: 'R1',
      40: 'D1',
      16: 'A1',

      82: 'L2',
      70: 'U2',
      83: 'D2',
      84: 'R2',
      90: 'A2',

      77: 'M1',
      83: 'S1',

      49: 'DEBUG1',
      50: 'DEBUG2',
      51: 'DEBUG3',
      52: 'DEBUG4'
    };