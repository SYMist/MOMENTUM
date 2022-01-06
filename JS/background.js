const images =
  ["0.jpeg", "1.jpg", "2.jpeg", "3.jpeg", "4.jpg", "5.jpg", "6.jpeg", "7.jpg", "8.jpg", "9.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)]; 
const bgImage = document.createElement("img");

bgImage.src = `Img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);