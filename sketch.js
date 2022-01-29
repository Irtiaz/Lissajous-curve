let radius;

let f = 3;
let phi = 0.5;
let t = 0;

let buffer;

let fInput, phiInput;
const fVal = document.getElementById('fVal');
const phiVal = document.getElementById('phiVal');

let resetButton;

function setup() {
  let minimumDimension = min(windowWidth, windowHeight - 200);
  createCanvas(minimumDimension, minimumDimension);

  fInput = select('#f');
  phiInput = select('#phi');
  fInput.changed(reset);
  phiInput.changed(reset);

  fVal.textContent = f;
  phiVal.textContent = phi;

  buffer = createGraphics(width / 2, height / 2);
  buffer.background(255);

  radius = width / 6;

  noFill();
}

function draw() {
  background(255);

  image(buffer, width / 2, 0);

  const x1 = cos(t);
  const y1 = sin(t);

  const x2 = sin(f * t + PI * phi);
  const y2 = -cos(f * t + PI * phi);

  const p1 = {
    x: width / 4 + radius * x1,
    y: height / 4 + radius * y1,
  };

  const p2 = {
    x: (3 * width) / 4 + radius * x2,
    y: (3 * height) / 4 + radius * y2,
  };

  const p = {
    x: (3 * width) / 4 + radius * x2,
    y: height / 4 + radius * y1,
  };

  stroke(0);
  strokeWeight(3);
  circle(width / 4, height / 4, 2 * radius);

  stroke(0, 0, 255);
  strokeWeight(12);
  point(p1.x, p1.y);

  stroke(0);
  strokeWeight(1);
  line(p1.x, p1.y, width, p1.y);

  stroke(0);
  strokeWeight(3);
  circle((3 * width) / 4, (3 * height) / 4, 2 * radius);

  stroke(0, 0, 255);
  strokeWeight(12);
  point(p2.x, p2.y);

  stroke(0);
  strokeWeight(1);
  line(p2.x, p2.y, p2.x, 0);

  stroke(0, 0, 255);
  strokeWeight(6);
  point(p.x, p.y);

  buffer.stroke(0, 0, 255);
  buffer.strokeWeight(6);
  buffer.point(buffer.width / 2 + radius * x2, buffer.height / 2 + radius * y1);

  t += 0.01;
}

function reset() {
  f = fInput.value();
  phi = phiInput.value();

  fVal.textContent = f;
  phiVal.textContent = phi;

  t = 0;

  buffer.background(255);
  background(255);
}
