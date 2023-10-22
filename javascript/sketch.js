
function setup() {
  createCanvas(600, 600);

  //make background black
  background(0);
}

function draw() {

  if (mouseIsPressed) { //if moused is pressed
    // execute this function at 60 frames per second
     mySquares(mouseX, mouseY, 20, 20);

     //uncomment this code for the pattern function
    // translate(mouseX, mouseY); //use translate to move position instead
    // squareInside(0, 0);
  }
  
}


//functions:

//square drawing function
function mySquares(x, y) {

  noFill(); //set the squares to have no fill
  stroke(255); //stroke to be white
  rectMode(CENTER); //make the center of the square the x,y value
  
  //map the size of the square to the width of the mouse x position. Use negative values so the square is smallest in the middle
  w_ = map(mouseX, 0, width, -100, 100);

  //draw square
  rect(x, y, w_, w_);

}

//pattern
function squareInside(x, y) {
  
  //again, set the drawing functions
  noFill();
  stroke(255);
  rectMode(CENTER);

  //create a square within a square pattern
  for (let i = 80; i >=20; i -= 10) { //start with 80, and reduce width by 10 pixels until it reaches 20 pixels
    rect(x, y, i, i);
    
  }

}
