//SKIN
let img;
let img2;
let opac = 0;
let loudness = [0];
//NOISE
let mic;

var left;
var right;

function preload() {
  img = loadImage("../Assets/skin.png");
  img2 = loadImage("../Assets/sound.png");
}

function setup() {
  // 800 x 400 (double width to make room for each "sub-canvas")
  createCanvas(windowWidth, windowHeight);

  left = createGraphics(600, 800);
  right = createGraphics(600, 800);

  mic = new p5.AudioIn();

  mic.start();
  drawLeft();
}

function draw() {
  push();
  translate(-300, 0);
  image(left, windowWidth / 3, 0);
  pop();
  //drawRight();

  //image(right, windowWidth / 2, 0);

  let vol = mic.getLevel();

  push();
  rotate((vol * 10) / 25);
  var tx = 200 * noise(vol / 10);
  translate(300, 0);
  image(img2, windowWidth / 3, 0);

  pop();

  if (mic.amplitude.volume > loudness[0]) {
    loudness.push(mic.amplitude.volume);
    loudness.shift();
    console.log(loudness);
  }
}

// NAV TO NOVEL SITE

function drawLeft() {
  left.image(img, 0, 0);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    opac++;
    left.tint(0, 153, 240, opac);
    left.image(img, 0, 0);
  }
}
function drawRight() {
  let vol = mic.getLevel();
  right.rotate((vol * 10) / 25);
  var tx = 200 * noise(vol / 10);
  right.translate(0, 0);
  right.image(img2, 0, 0);
}
