let balls;

class ball {
  constructor() {
    this.x = 0;
    this.y = 0; 
    this.speed = Math.random() * 20 + 1;
    this.col = "";
  }
}

function createBalls() {
  balls = [new ball(), new ball(), new ball(), new ball()];
  for (let i = 0; i < 4; i++) {
    balls[i].y = 30 * (i + 1);
    balls[i].col = ["white","green","blue","orange","red","black","lightgreen","aqua","blueviolet","whitesmoke"][Math.floor(Math.random() * 10)];
  }
}

function setup() {
  const button = createButton("reset");
  button.mousePressed(function() {
    console.clear();
    createBalls();
    loop();
  });
  createBalls();
  createCanvas(600,170);
}

function draw() {
  background(160,199,199);
  for (let i = 0; i < 4; i++) {
    fill(0,0,0);
    text(i+1,10,(i + 1) * 31);
    fill(balls[i].col);
    circle(balls[i].x, balls[i].y, 20);
    balls[i].x += balls[i].speed;
    if (balls[i].x > 600) {
      balls[i].speed -= balls[i].speed * 2;
    } else if (balls[i].x < 0) {
      console.log("ball " + String(i+1) + " won!!!");
      noLoop();
    }
  }
}