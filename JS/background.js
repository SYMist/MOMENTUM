const body = document.querySelector('body');

const IMAGE_NUMBER = 6;
const IMAGE_CLASS_NAME = "bgimage"

function printImage(imageNum) {
  const image = new Image()
  image.src = `Img/${imageNum}.jpg`
  image.classList.add(IMAGE_CLASS_NAME);
  body.append(image);
};

function genRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER + 1);
  return number;
};

function init() {
  const randomNumber = genRandom();
  printImage(randomNumber);
};

init();

// body.style.filter = 'brightness(50%)';

// 1~6의 숫자가 필요함
