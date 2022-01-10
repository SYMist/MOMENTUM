const IMAGE_API_KEY = '5apxtFF_QrhY7hqKSlPD0RfaawvmrCRTjm4Ffic8Oeo';
const randomImage = document.querySelector('#random_image');



function getRandomImage() {
  const img = new Image()
  const url = `https://api.unsplash.com/photos/random?client_id=${IMAGE_API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => data.urls.regular)
  img.src = url;
  randomImage.appendChild(img);
}

getRandomImage();