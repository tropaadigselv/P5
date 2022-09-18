let figureY;
let speed;
let score;

function setup() {
  createCanvas(500, 600);

  figureY=50
  speed = random(1, 5)
  score=0

}

function draw() {
  figureY += speed;
 
  background(220);
  //guitar strenge
  strokeWeight(5);
  for(let i =100; i<400; i+=50 ){
    line(i,0,i,height);
  }
  stroke(180);
  line(0,500,width,500);

  circle(100,figureY,50)

    if((figureY > 500 && figureY <550) && keyIsDown(81)){
      figureY = -50;
      speed = random(1,5);
      console.log("clicked")
      score++;
    }
  
    if(figureY>height+25){
      figureY = -50;
      speed = random(1,5);
    }
    
    strokeWeight(0);
    fill(0);
    text(score,50,100)
}
