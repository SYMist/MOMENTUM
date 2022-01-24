const IMAGE_API_KEY = '5apxtFF_QrhY7hqKSlPD0RfaawvmrCRTjm4Ffic8Oeo';
const randomImage = document.querySelector('#image');

// function getRandomImage() {
//   const url = `https://api.unsplash.com/photos/random?client_id=${IMAGE_API_KEY}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then(data =>
//        randomImage.src = data.urls.regular
//       )
//     .catch((error) => {console.log('error: ', error)}
//       );
// };

// getRandomImage();
// setInterval(getRandomImage, 30 * 1000);


function getRandomImage() {
  // const url = `https://api.unsplash.com/photos/random?client_id=${IMAGE_API_KEY}`;
  const url = `https://api.unsplash.com/photos/random?collections=8988972&client_id=${IMAGE_API_KEY}`;
  fetch(url)
    .then((response) => (response.json())
    .then(data =>
       randomImage.src = data.urls.regular
      )
    );
  // randomImage.src = 'Assets/Img/1.jpg'
};

getRandomImage();
setInterval(getRandomImage, 60 * 1000);








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