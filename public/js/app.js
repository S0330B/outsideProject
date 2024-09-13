document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav-items").style.animation =
    "fadeInRight .3s linear";
  document.querySelector(".nav-items").style.display = "flex";
  document.querySelector(".nav-items").style.flexDirection = "column";
});

document.querySelector(".close-button").addEventListener("click", () => {
  document.querySelector(".nav-items").style.animation = "unset";
  document.querySelector(".nav-items").style.display = "none";
});

const playVideo = (videoId) => {
  const selectedVideo = document.querySelector(`div#${videoId} > video`);
  const allVideos = document.querySelectorAll(`.product-img > video`);
  const selectedVideoContainer = document.querySelector(`div#${videoId}`);
  const allVideoContainers = document.querySelectorAll(`.product-img`);

  // Pause all other videos and reset their containers
  allVideos.forEach((video) => {
    if (video !== selectedVideo) {
      video.pause();
      video.currentTime = 0; // Optionally reset the video to the start
    }
  });

  // Reset all video containers to "pause"
  allVideoContainers.forEach((container) => {
    container.classList.remove("play");
    container.classList.add("pause");
  });

  // Toggle play/pause for the selected video
  if (selectedVideo.paused) {
    selectedVideo.play();
    selectedVideoContainer.classList.add("play");
    selectedVideoContainer.classList.remove("pause");
  } else {
    selectedVideo.pause();
    selectedVideoContainer.classList.add("pause");
    selectedVideoContainer.classList.remove("play");
  }
};
