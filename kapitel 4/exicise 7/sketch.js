/* dette program laver en streg og kan lave endnu en hvis man klikker med musen
og alt efter hvilken museknap man trykker med vil den være en bestemt farve */

function setup() { 
  createCanvas(120, 120); 
  strokeWeight(30); 
  } 
  function draw() { 
   background(204); 
   stroke(102); 
   line(40, 0, 70, height); 
   //mouseIsPreesed er en bool som tjekker om der trykkes på musen
   if (mouseIsPressed) { //hvor kommer denne variable fra?
    //mouseButten tjekker hvilken museknap der trykkes på og er også en bool
    if (mouseButton == LEFT) {  // og hvad med den?
     stroke(255); 
    } 
    else { 
     stroke(0); 
    } 
    line(0, 70, width, 50);
    } 
  } 