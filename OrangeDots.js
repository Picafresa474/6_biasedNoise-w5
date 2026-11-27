

function setup() {
  createCanvas(510, 510);
  frameRate(60);
  stroke(300);
  noFill();
}

function draw() {
  background("white");

  // Uncomment the code to try the different examples.
  // Comment it again before running the next one.
  
  //Spiral
  stroke(250, 107, 64); // orange
  translate(width / 5, height / 4); // move origin
  for (var i = 0; i < 5000; i++) {
    var angle = i * 0.15;
    var cirDist = i * 0.08;
    var c = createVector(cos(angle), sin(angle));
    cirDist = cirDist + random(-20, 20);
    c.mult(cirDist);
    point(c.x, c.y);
  } 
stroke(201, 54, 174); // purple
  translate(width / 5, height / 4); // move origin
  for (var i = 0; i < 5000; i++) {
    var angle = i * 0.15;
    var cirDist = i * 0.08;
    var c = createVector(cos(angle), sin(angle));
    c.mult(cirDist);
    point(c.x, c.y);
  } 
// wave blue
  push();
  stroke(158,204,240); // light blue
  translate(0, height /3); // move origin
  var amp = 40;
  for (var i = 0; i < 2000; i++) {
   var waveX = i * (width / 2000);

  var waveY = cos((waveX / width) * PI * 6) * amp;

  waveY += random(-3, 3);

  point(waveX, waveY);

  }
  pop();
  // circle
  stroke(213,48, 109);// pink
  translate(width / 5, height / 4);// move origin to center of circle
  for (var i = 0; i < 5000; i++) {// draw points in a circle
    var cirDist = (max(random(0, 1), random(0, 1)) * width) / 10;
    var angle = random(0, PI * 2); // random angle
    var c = createVector(cos(angle), sin(angle));// create a unit vector
    c.mult(cirDist);
    point(c.x, c.y);
  }
// star point cloud

push();
stroke(249, 146, 86); // light orange
translate(width / 5, height /8);// move origin to center of star
var points = 5000;
var outerRadius = 55;
var innerRadius = 25;
for (var i = 0; i < points; i++) {

  var angle = random(0, TWO_PI);

  // 5-point star shape
  var starRadius = map(
    cos(angle * 5),
    -1,
    1,
    innerRadius,
    outerRadius
  );
  var distance = random(0, starRadius);
  var x = cos(angle) * distance;
  var y = sin(angle) * distance;

  point(x, y);
}

pop();


  //=== 1 - even distribution of random points ===
  //for (var i = 0; i < 5000; i++) {
  //  var x = random(0, width);
   // var y = random(0, height);
   // point(x, y);
 // }

  //=== 2 - bias towards the left ===
  //for (var i = 0; i < 5000; i++) {
  // var x = min(random(0, width), random(0, width));
   // var y = random(0, height);
   // point(x, y);
  //}

  //=== 3 - bias towards bottom left corner ===
  //for (var i = 0; i < 5000; i++) {
  //  var x = min(random(0, width), random(0, width));
  //  var y = max(random(0, height), random(0, height));
  //  point(x, y);
  //}

  //=== 4 - create more extreme effects ===
  // for (var i = 0; i < 5000; i++) {
  //   var x = getMinBiasRand(0, width, 5);
  //   var y = getMaxBiasRand(0, height, 5);
  //   point(x, y);
  // }
}

//function getMinBiasRand(_min, _max, iters) {
 // var r = _max;
 //for (var i = 0; i < iters; i++) {
//    r = min(r, random(_min, _max));
 // }
 //return r;
//}

//function getMaxBiasRand(_min, _max, iters) {
 // var r = _min;
  //for (var i = 0; i < iters; i++) {
   // r = max(r, random(_min, _max));
 // }
 // return r;
//}
