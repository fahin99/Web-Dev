function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  // Draw a circle at mouse position
  fill(0, 100, 100);
  stroke(100);
  circle(mouseX, mouseY, 40);
}
