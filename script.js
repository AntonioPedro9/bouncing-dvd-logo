const logo = document.getElementById("logo");
const paths = document.querySelectorAll("#logo path");

let xVelocity = 6;
let yVelocity = 4;
let colorIndex = 0;

const colors = [
  "#be00ff",
  "#00feff",
  "#ff8300",
  "#0026ff",
  "#fffa01",
  "#ff2600",
  "#ff008b",
  "#25ff01",
];

function changeLogoColor() {
  colorIndex++;

  if (colorIndex >= colors.length) {
    colorIndex = 1;
  }

  paths.forEach((path) => path.setAttribute("fill", colors[colorIndex]));
}

function updateLogoPosition() {
  const logoRect = logo.getBoundingClientRect();
  const newX = logoRect.left + xVelocity;
  const newY = logoRect.top + yVelocity;

  logo.style.left = newX + "px";
  logo.style.top = newY + "px";
}

function checkScreenBoundaries() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const logoRect = logo.getBoundingClientRect();

  if (logoRect.left <= 0 || logoRect.right >= screenWidth) {
    xVelocity *= -1;
    changeLogoColor();
  }

  if (logoRect.top <= 0 || logoRect.bottom >= screenHeight) {
    yVelocity *= -1;
    changeLogoColor();
  }
}

function loop() {
  updateLogoPosition();
  checkScreenBoundaries();
  requestAnimationFrame(loop);
}

loop();
