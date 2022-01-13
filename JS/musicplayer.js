const musicPlayerContainer = document.querySelector('#music-player-container');
const prevButton = document.querySelector('#prev');
const playButton = document.querySelector('#play');
const nextButton = document.querySelector('#next');

const audio = document.querySelector('#audio');
const progressBar = document.querySelector('#progress-bar');
const progressBarContainer = document.querySelector('#progress-bar-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//노래 제목
const songs = ['Bonfire', 'Butterflies', 'Camelia', 'Old Town Road', 'Tattos Together']

//노래 인덱스
let songIndex = 1;

//노래 로딩
loadSong(songs[songIndex]);

//노래 정보
function loadSong(song) {
  title.innerText = song;
  Image.src = `Assets/CoverImage/${song}.jpeg`;
  audio.src = `Assets/Music/${song}.mp3`;
}

//프로그레스바 업데이트
audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime/duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

// 프로그레스바 클릭
progressBar.addEventListener('click', setProgress);

// 프로그레스바 세팅
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

//버튼 누르면 노래 재생
playButton.addEventListener('click', () => {
  const isPlaying = musicPlayerContainer.classList.contains('play');
  
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//노래 재생
function playSong() {
  musicPlayerContainer.classList.add('play');
  playButton.querySelector('i.fas').classList.remove('fa-play');
  playButton.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

//노래 중지
function pauseSong() {
  musicPlayerContainer.classList.remove('play');
  playButton.querySelector('i.fas').classList.add('fa-play');
  playButton.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

//노래 바꾸기
prevButton.addEventListener('click', prevSong());
nextButton.addEventListener('click', nextSong());

//이전 노래
function prevSong() {
  songIndex --;
  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();

}
//다음 노래
function nextSong() {
  songIndex ++;
  if(songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// audio.addEventListener(‘ended’, nextSong);
