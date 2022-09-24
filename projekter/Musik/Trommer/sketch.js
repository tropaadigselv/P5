let SnareDrum;
let KickDrum;
let HiHat;
let Crash;
let FloorDrum;
let Drum;

function preload() {
  //loader de lyde tommesættet skal lave
  soundFormats("WAV", "mp3");
  SnareDrum = loadSound("Drums/snare");
  KickDrum = loadSound("Drums/kick");
  HiHat = loadSound("Drums/HiHat");
  Crash = loadSound("Drums/crash");
  FloorDrum = loadSound("Drums/floorDrum");
  Drum = loadSound("Drums/Drum.mp3");
}

function setup() {
  createCanvas(600, 400);
  background(220);

  //laver trommesættet
  circle(300, 300, 150);
  ellipse(350, 200, 75, 50);
  ellipse(250, 200, 75, 50);
  ellipse(185, 275, 65, 55);
  ellipse(415, 275, 70, 45);
  fill(255, 255, 0);
  ellipse(185, 220, 50, 10);
  ellipse(185, 230, 50, 10);
  ellipse(420, 230, 80, 15);
}

function draw() {
  // hvis der klikkes med musen tjekkes der også om man er inde for en trommes område,

  // stortrommen
  if (mouseIsPressed) {
    if (sqrt(sq(300 - mouseX) + sq(300 - mouseY)) < 150 / 2) {
      console.log("hej");
      KickDrum.play();
    } //lilletromme
    else if (mouseX > 151 && mouseX < 217 && mouseY > 247 && mouseY < 302) {
      console.log("hej");
      SnareDrum.play();
    } //venstre tromme over stortromme
    else if (mouseX > 212 && mouseX < 287 && mouseY > 174 && mouseY < 224) {
      Drum.play();
      console.log("hej");
    } // højre tromme over stortromme
    else if (mouseX > 311 && mouseX < 387 && mouseY > 174 && mouseY < 224) {
      Drum.play();
      console.log("hej");
    } //Floordrum
    else if (mouseX > 379 && mouseX < 449 && mouseY > 252 && mouseY < 296) {
      console.log("hej");
      FloorDrum.play();
    } //high-hat
    else if (mouseX > 160 && mouseX < 209 && mouseY > 214 && mouseY < 235) {
      console.log("hej");
      HiHat.play();
    } //bæken
    else if (mouseX > 379 && mouseX < 459 && mouseY > 222 && mouseY < 236) {
      console.log("hej");
      Crash.play();
    }
  }
}
