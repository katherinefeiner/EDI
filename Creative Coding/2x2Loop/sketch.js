function setup() {
  createCanvas(720,720);
  background('lightblue');
  fill('lightpink');
  strokeWeight (9);

}

function draw() {
  
  translate(60,60); //resets origin point
  
   for(var y = 0; y < 600; y = y+300){
      for(var x = 0; x < 600; x = x+300){
          quad (
  x,y,
    x+300,y,
    x+300,y+300,
    x,y+300
  );
      }
     
   }
  

}