function setup() {
  createCanvas(720,720);
  background('lightblue');
  fill('lightpink');
  strokeWeight (9);

}

function draw() {
  
  translate(60,60); //resets origin point
  
  quad (
  0,0,
    300,0,
    300,300,
    0,300
  );

}