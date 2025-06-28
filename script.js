const overlay = document.getElementById('overlay');
const enter = document.getElementById('enter');
const mainContent = document.getElementById('main-content');
const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.querySelector('.song-title');
const songAuthor = document.querySelector('.song-author');

let songs = [{ title: "i dont think we will ever find him", author: "wifiskeleton", file: "rizz/audio.mp3" },
{ title: "KATAMARI", author: "femtanyl", file: "rizz/bg.mp3" },
{ title: "Bistro", author: "MF DOOM, Madvillian, Madlib", file: "rizz/bistro.mp4" }
];
let current = 0;
let playing = true;

function loadSong(index) {
  music.src = songs[index].file;
  songTitle.textContent = songs[index].title;
  songAuthor.textContent = "by " + songs[index].author;
  music.play();
  playBtn.textContent = "⏸";
  playing = true;
}

enter.addEventListener('click', () => {
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = 'none';
    mainContent.classList.remove('hidden');
    mainContent.classList.add('visible');
    loadSong(current);
  }, 1000);
});

playBtn.addEventListener('click', () => {
  if (playing) {
    music.pause();
    playBtn.textContent = "▶";
  } else {
    music.play();
    playBtn.textContent = "⏸";
  }
  playing = !playing;
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % songs.length;
  loadSong(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
});

volumeSlider.addEventListener('input', () => {
  music.volume = volumeSlider.value;
});