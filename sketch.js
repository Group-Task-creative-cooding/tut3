function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);


  yellow_long_rect_V();
  yellow_long_rect3_V();
  yellow_long_rect9_V();
  yellow_long_rect10_V();
  yellow_long_rect_H();
  yellow_long_rect4_H();
  yellow_long_rect5_H();
  yellow_long_rect6_H();
  yellow_long_rect8_H();
  rect_1();
  rect_2();
  rect_blue_left();
  rect_yellow_mid();
  rect_grey_left();
  rect_grey_up();
}

function makeRGB(colorName) {
  if (colorName === "red") return color(255, 0, 0);
  if (colorName === "yellow") return color(255, 255, 0);
  if (colorName === "blue") return color(0, 0, 255);
  if (colorName === "white") return color(255);
  if (colorName === "grey") return color(200);
  return color(0);
}

// Example converted functions
function yellow_long_rect_V() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(240, 0, 15, 400);
}

function yellow_long_rect3_V() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(270, 0, 15, 70);
}

function yellow_long_rect9_V() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(270, 140, 20, 260);
}

function yellow_long_rect10_V() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(330, 140, 15, 150);
}

function yellow_long_rect_H() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(0, 70, 400, 20);
}

function yellow_long_rect4_H() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(0, 140, 400, 20);
}

function yellow_long_rect5_H() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(0, 270, 400, 20);
}

function yellow_long_rect6_H() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(0, 230, 400, 20);
}

function yellow_long_rect8_H() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(0, 330, 240, 20);
}

function rect_1() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(130, 70, 65, 160);
}

function rect_2() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(35, 140, 60, 100);
}

function rect_blue_left() {
  fill(makeRGB("blue"));
  noStroke();
  rect(35, 180, 60, 50);
}

function rect_yellow_mid() {
  fill(makeRGB("yellow"));
  noStroke();
  rect(52, 192, 25, 25);
}

function rect_grey_left() {
  fill(makeRGB("grey"));
  noStroke();
  rect(130, 180, 65, 30);
}

function rect_grey_up() {
  fill(makeRGB("grey"));
  noStroke();
  rect(130, 140, 65, 20);
}
