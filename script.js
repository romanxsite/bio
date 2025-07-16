let vantaEffect = null;
window.addEventListener('DOMContentLoaded', function() {
  vantaEffect = VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x33385f,
    shininess: 41.00,
    zoom: 0.82
  });
});

let opacity = 0;
let fadeIn = true;
let delay = 0.004;
function updateTitle() {
  let displayText = titleText.charAt(0) + titleText.slice(1, Math.floor(opacity * (titleText.length - 1)) + 1);
  document.title = displayText;
  if (fadeIn) {
    opacity += delay;
    if (opacity >= 1) {
      fadeIn = false;
    }
  } else {
    opacity -= delay;
    if (opacity <= 0) {
      fadeIn = true;
    }
  }
  requestAnimationFrame(updateTitle);
}

const textElement = document.getElementById("text");
const overlay = document.getElementById("overlay");
const audio = document.getElementById("enter-sound");
const container = document.querySelector('.container');
const phrases = [
  "",
  "my",
  "my teritory",
  "my teritory my",
  "my teritory my rules.",

];
const delays = [0.3, 0.4, 1.6, 0.5, 0.3,];


document.getElementById('enter-popup').addEventListener('click', function() {
  let enterPopup = document.getElementById('enter-popup');
  let enterSound = document.getElementById('enter-sound');
  enterSound.loop = true;
  audio.loop = true;
  enterSound.load();
  enterPopup.classList.add('clicked');
  enterSound.play().catch(e => {
    console.log('Audio play error:', e);
    alert('Audio could not be played. Check your browser settings or try clicking again.');
  });
  setTimeout(() => {
      enterPopup.style.opacity = '0';
      setTimeout(() => {
          enterPopup.style.display = 'none';
      }, 500);
  }, 200);
  requestAnimationFrame(updateTitle);
});

audio.addEventListener("play", () => {
  let i = 0;
  overlay.style.opacity = "1";
  function updateText() {
    if (i < phrases.length) {
      textElement.textContent = phrases[i];
      if (i === phrases.length - 1) {
        setTimeout(() => {
          overlay.style.opacity = "0";
          container.style.filter = 'none';
          setTimeout(() => {
            overlay.style.display = 'none';
          }, 500);
        }, delays[i] * 1000);
      } else {
        setTimeout(updateText, delays[i] * 1000);
      }
      i++;
    }
  }
  updateText();
});
