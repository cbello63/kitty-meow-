var grow= 0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(158,131,131); //pink background
  //circle
  stroke(110,72,72) // red border
  strokeWeight(2);


  fill(255,grow,200,150); // green center
  ellipse(mouseX-50,mouseY,140,200);/ green oval on the left side 
  fill(150, 131, 176);
  stroke(93,100,148);
  strokeWeight(5);
  rect(150.230,80,40);
  strokeWeight(2);
  fill(36,69,39);
  stroke(154,72,156);
  strokeWeight(7);
  textFont('Courier'); 
  textSize(40);
  text('kitty meow meow',50,150);
}



function mousePressed(){
  if (grow>=500){
      grow=0;
  } else {
    grow= grow+10;
  }
  grow= grow+10;
    }
