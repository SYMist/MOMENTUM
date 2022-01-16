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
  // fetch(url)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       return response.json();
  //       } else {
  //         throw new Error("Now loading...")
  //       }
  //     })
  //   .then(data =>
  //      randomImage.src = data.urls.regular
  //     )
  //   .catch((error) => {console.log('error: ', error)}
  //     );
  randomImage.src = 'Assets/Img/1.jpg'
};

getRandomImage();
setInterval(getRandomImage, 30 * 1000);








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