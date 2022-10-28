//skriver det der står i arryet
function setup() {
  createCanvas(400, 400);
  let wordcloud = [
    "Javascript",
    "Python",
    "C++",
    "C",
    "C#",
    "Julia",
    "Java",
    "Go",
    "R",
    "Basic",
  ];
  for (let i = 0; i < wordcloud.length; i++) {
    text(wordcloud[i], random(400), random(400));
    i = i + 1;
  }
}
