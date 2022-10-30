let a;
let x;

function setup() {
  createCanvas(400, 400);
  a = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
  x = a[0];

  sort(a);
  for (let i = 0; i < 10; i++) {
    for (let i = 0; i < a.length; i++) {
      if (x < a[i]) {
        x = a[i];
      }
    }
    print(x);
    print(a);
    x = a[0];
    a.pop();
  }
}
