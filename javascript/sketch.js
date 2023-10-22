
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {

  if (mouseIsPressed) {
    // mySquares(mouseX, mouseY, 20, 20);
    translate(mouseX, mouseY);
    squareInside(0, 0);
  }

  
}


function mySquares(x, y, w, h) {

  noFill();
  stroke(255);
  rectMode(CENTER);

  w_ = map(mouseX, 0, width/2, w, w+100);
  h_ = map(mouseX, 0, height/2, h, h+100);

  rect(x, y, w_, h_);

}

function squareInside(x, y) {
  
  noFill();
  stroke(255);
  rectMode(CENTER);

  for (let i = 80; i >=20; i -= 10) {
    rect(x, y, i, i);
    
  }


}
