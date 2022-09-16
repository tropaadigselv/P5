function setup() {
  createCanvas(600, 400);
  background(220);

  //laver trommesættet
  rectMode(CENTER);
  circle(300,300,150);
  ellipse(350,200,75,50);
  ellipse(250,200,75,50);
  ellipse(185,275,65,55);
  ellipse(415,275,70,45);
  fill(255,255,0);
  ellipse(185,220,50,10)
  ellipse(185,230,50,10)
  ellipse(420,230,80,15)
}

function draw() {
  //console.log('x ', mouseX, 'y ', mouseY)
  
  // stortrommen
  if(mouseIsPressed){
  if(sqrt(sq(300-mouseX)+sq(300-mouseY))<150/2){
    console.log('hej');
  }//lilletromme
  else if((mouseX>151 && mouseX<217) && (mouseY> 247 && mouseY<302)){
    console.log('hej');
  }//venstre tromme over stortromme
  else if((mouseX>212 && mouseX<287) && (mouseY> 174 && mouseY<224)){
    console.log('hej');
  }// højre tromme over stortromme
  else if((mouseX>311 && mouseX<387) && (mouseY> 174 && mouseY<224)){
    console.log('hej');
  }//tromme til højre for stortromme
  else if((mouseX>379 && mouseX<449) && (mouseY> 252 && mouseY<296)){
    console.log('hej');
  }//high-hat
  else if((mouseX>160 && mouseX<209) && (mouseY> 214 && mouseY<235)){
    console.log('hej');
  }//bæken
  else if((mouseX>379 && mouseX<459) && (mouseY> 222 && mouseY<236)){
    console.log('hej');
  }
}
}
