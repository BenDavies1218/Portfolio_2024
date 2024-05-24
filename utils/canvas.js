const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.display = "absolute";
const c = canvas.getContext("2d");

const spaceImage = new Image();
spaceImage.src = "./utils/images/image2.jpg";

let mouse = {
  x: undefined,
  y: undefined,
};

let maxRadius = 4;

let colorArray = ["#210535", "#430d4b", "#7b337d", "#c874b2", "#f5d5e0"];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function (event) {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Interactivity with mouse
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 0.05;
      }
    } else if (this.radius > 4) {
      this.radius -= 1;
    }

    this.draw();
  };
}

function Text(text, font, x, y) {
  this.text = text;
  this.font = font;
  this.x = x;
  this.y = y;

  this.draw = function () {
    c.strokeStyle = "white";
    c.font = this.font;
    c.fillText(this.text, x, y);
  };
}

function Background(image, x, y) {
  this.image = image;
  this.x = x;
  this.y = y;

  this.draw = function () {
    c.drawImage(this.image, this.x, this.y, innerWidth, innerHeight);
  };
}

let circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < 100; i++) {
    let radius = Math.random() * 1 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

init();

let loadElements = document.getElementsByClassName("loadElement");
let loadScreen = document.getElementsByClassName("containerforloading");
let loadText = document.getElementsByClassName("text");

function animate() {
  canvas.style.opacity = 0;
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  new Background(spaceImage, 0, 0).draw();
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  canvas.style.opacity = 1;
  [...loadElements].forEach((element) => {
    element.style.opacity = 1;
  });
  [...loadScreen].forEach((element) => {
    element.remove();
  });
  [...loadText].forEach((element) => {
    element.remove();
  });
}

animate();
