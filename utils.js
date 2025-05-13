function drawCanvasBackground(svg, width, height) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 0);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", "white");
  svg.appendChild(rect);
}

function makeRGB(color) {
  if (color === "red") return "rgb(255,0,0)";
  if (color === "yellow") return "rgb(255,255,0)";
  if (color === "blue") return "rgb(0,0,255)";
  if (color === "white") return "rgb(255,255,255)";
  if (color === "grey") return "rgb(200,200,200)";
  return "rgb(0,0,0)";
}

function yellow_long_rect_V() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 240);
  rect.setAttribute("y", 0);
  rect.setAttribute("width", 15);
  rect.setAttribute("height", 400);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}

function yellow_long_rect3_V() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 270);
  rect.setAttribute("y", 0);
  rect.setAttribute("width", 15);
  rect.setAttribute("height", 70);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}

function yellow_long_rect9_V() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 270);
  rect.setAttribute("y", 140);
  rect.setAttribute("width", 20);
  rect.setAttribute("height", 260);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}
function yellow_long_rect10_V() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 330);
  rect.setAttribute("y", 140);
  rect.setAttribute("width", 15);
  rect.setAttribute("height", 150);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}

function yellow_long_rect_H() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 70);
  rect.setAttribute("width", 400);
  rect.setAttribute("height", 20);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}

function yellow_long_rect4_H() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 140);
  rect.setAttribute("width", 400);
  rect.setAttribute("height", 20);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}

function yellow_long_rect5_H() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 270);
  rect.setAttribute("width", 400);
  rect.setAttribute("height", 20);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}

function yellow_long_rect6_H() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 230);
  rect.setAttribute("width", 400);
  rect.setAttribute("height", 20);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}


function yellow_long_rect8_H() {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 0);
  rect.setAttribute("y", 330);
  rect.setAttribute("width", 240);
  rect.setAttribute("height", 20);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;
}

function rect_1(){
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 130);
  rect.setAttribute("y", 70);
  rect.setAttribute("width", 65);
  rect.setAttribute("height", 160);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;

}

function rect_2(){
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 35);
  rect.setAttribute("y", 140);
  rect.setAttribute("width", 60);
  rect.setAttribute("height", 100);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;

}


function rect_blue_left(){
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 35);
  rect.setAttribute("y", 180);
  rect.setAttribute("width", 60);
  rect.setAttribute("height", 50);
  rect.setAttribute("fill", makeRGB("blue"));
  return rect;

}


function rect_yellow_mid(){
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 52);
  rect.setAttribute("y", 192);
  rect.setAttribute("width", 25);
  rect.setAttribute("height", 25);
  rect.setAttribute("fill", makeRGB("yellow"));
  return rect;

}

function rect_grey_left(){
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 130);
  rect.setAttribute("y", 180);
  rect.setAttribute("width", 65);
  rect.setAttribute("height", 30);
  rect.setAttribute("fill", makeRGB("grey"));
  return rect;

}

function rect_grey_up(){
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", 130);
  rect.setAttribute("y", 140);
  rect.setAttribute("width", 65);
  rect.setAttribute("height", 20);
  rect.setAttribute("fill", makeRGB("grey"));
  return rect;

}



