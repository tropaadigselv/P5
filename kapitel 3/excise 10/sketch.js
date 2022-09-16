let x1;

let y1;

let Xstop = false;
let Ystop = false;


function setup() {
  createCanvas(400, 400);
  
  x1=20;
  y1=0;
}

function draw() {
  background(220);

  strokeWeight(10);
  line(0,y1,400,y1);
  line(x1,0,x1,400);

  if(x1<401 && Xstop == false){
    x1++;
   
  }else if(x1>-1 && Xstop == true){
    x1-=1;
    
  }

  if(x1>400){
    Xstop=true;
  }else if(x1<0){
    Xstop=false;
  }

  if(y1<401 && Ystop == false){
    y1++;
    
  }else if(y1>-1 && Ystop == true){
    y1-=1;
    
  }

  if(y1>400){
    Ystop=true;
  }else if(y1<0){
    Ystop=false;
  }

console.log(y1);
console.log(Ystop);
}
