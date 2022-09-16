
let x;
let y;
let r = 25;
let d;

let count = 0;

function setup(){
  createCanvas(300,300);
  x=random(0+r/2,width-r/2);
  y=random(0+r/2,300-r/2);
}



function draw(){
  background(220);
  d = sqrt(sq(x-mouseX)+sq(y-mouseY));
  //console.log(d);

  if(d<r/2 && mouseIsPressed){
    x=random(0+r/2,width-r/2);
    y=random(0+r/2,300-r/2);
    count++;
  }
  
  circle(x,y,r);

  text('times cliked ' + count,100,25);
  console.log(d);
}