
/* dette program laver en rektangel alt efter hvilken tredjedel din mus er på i
det givet canvas */

function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(220);
  fill(255,0,0);
  noStroke();
  //width er bredden af canvas mens height er højten af canvas.
  // her tjekker vilken tredjedel musen er på ved at dividere 3 med bredden altså width
  if (mouseX < width/3) {
    rect(0, 0, width/3, height);
  }
  else if (mouseX <= width*2/3) {
    rect(width/3, 0, width/3, height);
  }
  else {
    rect(width*2/3, 0, width/3, height);
  }
}
