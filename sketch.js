var penwidth = 3; //default(initial penwidth is 3)
var pen = 1; //defalut(initial pen is 1)
var r = 0,
    g = 0,
    b = 0; //default color:black

function setup() {
  createCanvas(displayWidth, displayHeight);//size of drawing board
  background(247, 246, 234);//color of drawing board
}

//variableEllipse
function draw() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically 
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly 

function variableEllipse(x, y, px, py) {
  var speed = abs(x-px) + abs(y-py);
  stroke(speed);
  fill(r,g,b);
  ellipse(x, y, speed, speed);
}

//function: shape, color, size selectors
function draw() {
  fill(1);
  stroke(155);
  strokeWeight(1);
  textSize(20);
  
//area to select shapes
  noFill();
  rect(0, 40, 40, 40);
  rect(0, 80, 40, 40);
  rect(0, 120, 40, 40);
  rect(0, 160, 40, 40);
  rect(0, 200, 40, 40);
  rect(0, 240, 40, 40);
//images of shape 
  line(10, 44, 30, 76);
  ellipse(20, 100, 25, 25);
  rect(10, 130, 20, 20);
  arc(20, 220, 25, 25, 0, PI + QUARTER_PI, CHORD);
  fill(255);
  stroke(155);
  ellipse(20, 180, 25, 25);
  
  
  strokeWeight(1);
//area to select colors
  fill(255, 0, 0); //red
  rect(0, 300, 40, 40);
  fill(255, 128, 0); //orange
  rect(0, 340, 40, 40);
  fill(255, 255, 0); //yellow
  rect(0, 380, 40, 40);
  fill(0, 255, 0); //green
  rect(0, 420, 40, 40);
  fill(0, 255, 255); //blue
  rect(0, 460, 40, 40);
  fill(0, 64, 128); //indigo
  rect(0, 500, 40, 40);
  fill(128, 0, 128); //purple
  rect(0, 540, 40, 40);
  fill(0); //black
  rect(0, 580, 40, 40);
  fill(242,142,142);//pink
  rect(0, 620, 40, 40);

  //area to select size
  noFill();
  rect(0, 680, 40, 40);
  rect(0, 720, 40, 40);
  rect(0, 760, 40, 40);
  stroke(r,g,b);
  fill(r,g,b);
  
  fill(r,g,b);
  ellipse(20, 700, 7, 7);
  ellipse(20, 740, 10, 10);
  ellipse(20, 780, 13, 13);
  
  //TO DO//
  if (mouseIsPressed) {
    var px = pmouseX,
      py = pmouseY,
      x = mouseX,
      y = mouseY;
    if (x < 40) {//select
      //penwidth
      if (y > 680 && y < 720) penwidth = 3;
      else if (y > 720 && y < 760) penwidth = 6;
      else if (y > 760 && y < 800) penwidth = 12;
      //shape
      else if (y > 40 && y < 80) pen = 1;
      else if (y > 80 && y < 120) pen = 2;
      else if (y > 120 && y < 160) pen = 3;
      else if (y > 160 && y < 200) pen = 4;
      else if (y > 200 && y < 240) pen = 5;
      else if (y > 240 && y< 280) pen = 6;
      //select color
      else if (y > 300 && y < 340) {
        r = 255;
        g = 0;
        b = 0; //red
      } else if (y > 340 && y < 380) {
        r = 255;
        g = 128;
        b = 0; //orange
      } else if (y > 380 && y < 420) {
        r = 255;
        g = 255;
        b = 0; //yellow
      } else if (y > 420 && y < 460) {
        r = 0;
        g = 255;
        b = 0; //green
      } else if (y > 460 && y < 500) {
        r = 0;
        g = 255;
        b = 255; //blue
      } else if (y > 500 && y < 540) {
        r = 0;
        g = 64;
        b = 128;
      } //indigo
      else if (y > 540 && y < 580) {
        r = 128;
        g = 0;
        b = 128;
      } //purple
      else if (y > 580 && y < 620) {
        r = 0;
        g = 0;
        b = 0;
      } //black
      else if (y > 620 && y < 660) {
        r = 242;
        g = 142;
        b = 142;
      }//pink
    } 
    
    else {//paint
      if (pen == 1) {
        strokeWeight(penwidth);
        stroke(r, g, b);
        line(px, py, x, y);
      } else if (pen == 2) {
        strokeWeight(penwidth);
        stroke(r, g, b);
        fill(r, g, b)
        ellipse(x, y, 3 * penwidth, 3 * penwidth);
      } else if (pen == 3) {
        strokeWeight(penwidth);
        stroke(r, g, b);
        fill(r, g, b)
        rect(x, y, 3 * penwidth, 3 * penwidth);
      } else if (pen == 4) {
        noStroke();
        fill(247, 246, 234);
        ellipse(x, y, 5 * penwidth, 5 * penwidth);
      } else if (pen == 5)
        variableEllipse(x, y, px, py);
        else if (pen == 6)
        drawRaindrop(penwidth,x,y);
    }
  }
  //use esc to empty canvas
  if (keyIsPressed)
    if (keyCode == ESCAPE) {
      background(255);
    }
  }