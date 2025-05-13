let svg = document.getElementById("canvas");

svg.setAttribute("width", 400);
svg.setAttribute("height", 400);

drawCanvasBackground(svg, 400, 400); // white bg

// Only append defined functions:
svg.appendChild(yellow_long_rect_V());
svg.appendChild(yellow_long_rect_H());
svg.appendChild(yellow_long_rect3_V());  // ver_2
svg.appendChild(yellow_long_rect4_H());  // hor_2
svg.appendChild(yellow_long_rect5_H());  // hor_3
svg.appendChild(yellow_long_rect6_H());  // hor_4
  // hor_5
svg.appendChild(yellow_long_rect8_H());  // hor_6
svg.appendChild(yellow_long_rect9_V());  // ver_3
svg.appendChild(yellow_long_rect10_V()); // ver_4
svg.appendChild(rect_1());
svg.appendChild(rect_2());
svg.appendChild(rect_blue_left());
svg.appendChild(rect_yellow_mid());
svg.appendChild(rect_grey_left());
svg.appendChild(rect_grey_up());


