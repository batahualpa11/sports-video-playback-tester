const video = document.getElementById("sportsVideo");
const playPauseBtn = document.getElementById("playPause");
const skipBackBtn = document.getElementById("skipBack");
const skipForwardBtn = document.getElementById("skipForward");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "Pause";
  } else {
    video.pause();
    playPauseBtn.textContent = "Play";
  }
});

skipBackBtn.addEventListener("click", () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

skipForwardBtn.addEventListener("click", () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 15);
});
