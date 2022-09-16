/* dette program laver enten et h eller et n alt efter hvilken knps du trykker på */

function setup() 
{ 
 createCanvas(120, 120); 
} 
function draw() 
{ 
 background(204); 
 //keyIsPressed er en bool der tjekker om der trykkes på en kan på tastaturet
 if (keyIsPressed) {  //hvad er denne variable mon for en type?
  //key bruges for at se hvilken knap der sidst belv trykker på
  if ((key == 'h') || (key == 'H')) { line(30, 60, 90, 60); } 
  if ((key == 'n') || (key == 'N')) { line(30, 20, 90, 100); } 
 } 
line(30, 20, 30, 100); 
line(90, 20, 90, 100); 
} 