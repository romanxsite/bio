const overlay = document.getElementById("overlay");
const enter = document.getElementById("enter");
const mainContent = document.getElementById("main-content");
const bgMusic = document.getElementById("bg-music");
enter.addEventListener("click", () => {
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
    mainContent.classList.remove("hidden");
    mainContent.classList.add("visible");
    bgMusic.volume = 0.3;
    bgMusic.play();
  }, 1000);
});