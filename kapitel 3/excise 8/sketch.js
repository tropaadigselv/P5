let x; 
let y; 
let xspeed; 
let yspeed; 
let Xpos;
let Ypos;

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50);  

  if(x>Xpos){
    x+=xspeed;
  } else if(x<Xpos){
    x-=xspeed
  }

  if(y>Ypos){
    y+=yspeed;
  }else if (y<Ypos){
    y-=yspeed;
  }

  if(x>width-25){
    x=width-25;
  }else if(x< 25){
    x=25
  }

  if(y>width-25){
    y=width-25;
  }else if (y<25){
    y=25;
  }


  if(mouseIsPressed){
    Xpos=mouseX;
    Ypos=mouseY;
  }




  console.log("y = ",y);
  console.log("x = ",x);
}