
let mus1X;
let mus1Y;
let mus2X;
let mus2Y;

let ost1 = 0;
let ost2 = 0;
let timer = 0;

var oste = [[400,400],[200,200]]

function setup() {
  createCanvas(600, 600);
  mus1X = random(0,600);
  mus1Y = random(0,600);
  mus2X = random(0,600);
  mus2Y = random(0,600);
}

function draw() {
  background(220);

  for(var i = 0; i < oste.length; i++){
    ost(oste[i][0],oste[i][1],i);
  }



  //player 1
  if (keyIsDown(LEFT_ARROW)) {
    mus1X -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    mus1X += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    mus1Y -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    mus1Y += 3;
  }
  strokeWeight(1);
  fill(255,0,0);
  ellipse(mus1X,mus1Y,50,50);
  text("player 1: " + ost1, 10, 10);
  //player 2
//d
  if (keyIsDown(65)) {
    mus2X -= 3;
  }
//a
  if (keyIsDown(68)) {
    mus2X += 3;
  }
//w
  if (keyIsDown(87)) {
    mus2Y -= 3;
  }
//s
  if (keyIsDown(83)) {
    mus2Y += 3;
  }
  strokeWeight(1);
  fill(0,255,0);
  rectMode(CENTER);
  rect(mus2X,mus2Y,50,50);
  
  timer++;
  if(timer == 100){
    timer =0;
    oste.push([random(0,width),random(0,height)]);
  }

  
  text("player 2: " + ost2, 530,10);

}


function ost(x,y,i){
  strokeWeight(10);
  
  point(x,y);
  if(((mus1X+50 > x) && (x > mus1X-50)) && ((mus1Y+50 > y) && (y > mus1Y-50))){
    oste.splice(i,1);
    ost1++;
  }

  if(((mus2X+50 > x) && (x > mus2X-50)) && ((mus2Y+50 > y) && (y > mus2Y-50))){
    oste.splice(i,1);
    ost2++;
  }

}