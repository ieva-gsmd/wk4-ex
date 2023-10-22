
function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {

  if (mouseIsPressed) {
     mySquares(mouseX, mouseY, 20, 20);
    // translate(mouseX, mouseY);
    // squareInside(0, 0);
  }

  
}


function mySquares(x, y) {

  noFill();
  stroke(255);
  rectMode(CENTER);
  

  w_ = map(mouseX, 0, width, -100, 100);


  rect(x, y, w_, w_);

}

function squareInside(x, y) {
  
  noFill();
  stroke(255);
  rectMode(CENTER);

  for (let i = 80; i >=20; i -= 10) {
    rect(x, y, i, i);
    
  }


}
