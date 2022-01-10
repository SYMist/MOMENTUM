const IMAGE_API_KEY = '5apxtFF_QrhY7hqKSlPD0RfaawvmrCRTjm4Ffic8Oeo';
const randomImage = document.querySelector('#random_image');

function getRandomImage() {
  const image = new Image();
  const url = `https://api.unsplash.com/photos/random?client_id=${IMAGE_API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => image.src = data.urls.regular)
  randomImage.appendChild(image);
};

getRandomImage();


// 아래는 실패한 코드
// function getRandomImage() {
//   const img = new Image()
//   const url = `https://api.unsplash.com/photos/random?client_id=${IMAGE_API_KEY}`;
//   fetch(url)
//     .then(response => response.json())
//   img.src = url;
//   randomImage.appendChild(img);
// }

// getRandomImage();