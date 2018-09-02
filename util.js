center = function(a) {
  return {x: a.x + (0.5 * a.width), y: a.y + (0.5 * a.height)};
}

acenter = function(a, x, y) {
  a.x = x - (0.5 * a.width);
  a.y = y - (0.5 * a.height); 
}

getr2 = function(a, b) {
  return Math.atan2(a.y - b.y, b.x - a.x) * 180 / Math.PI;
}

rotate_point = function(x, y, cx, cy, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

applyThrust = function(thing, rotation, power) {
    var origin = {'x' : thing.x, 'y': thing.y};
    var tp = [thing.x + 1, thing.y];
    var np = rotate_point(tp[0], tp[1], origin.x, origin.y, rotation);
    thing.mx = np[0] - thing.x;
    thing.my = np[1] - thing.y;
    thing.x = thing.x + thing.mx * power;
    thing.y = thing.y + thing.my * power;
}

getDistance = function(a, b) {
  const x = ((a.x - b.x) * (a.x - b.x));
  const y = ((a.y - b.y) * (a.y - b.y));
  if (x + y == 0){
    return 0;
  }
  return Math.sqrt((x+y));
}

collide = function(r1, r2) {
  //Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occurring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      //There's definitely a collision happening
      hit = true;
    } else {

      //There's no collision on the y axis
      hit = false;
    }
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};