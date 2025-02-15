// Your code here
let dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});