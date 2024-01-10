//adding a Gif to my grid

let gif;

function preload ('assets/FeinerGIF.gif');

function setup() {
  createCanvas (windowWidth,windowHeight);
  fill ("lightblue");
  strokeWeight (1);

}

function draw() {
background('white');
  var num = 25;
  var sideLen = windowWidth/num;
 
  
  for (var y=0; y < windowHeight; y = y+sideLen) {
    for (var x=0; x < windowWidth; x=x+sideLen){
    image(gif, x, y, sideLen, sideLen);
          }
}

  
}
function windowResize (){
  resizeCanvas (windowWidth, windowHeight);
}