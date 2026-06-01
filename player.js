(function () {
  var video = document.querySelector("video");
  var startButton = document.querySelector(".start-button");

  if (!video) {
    return;
  }

  function showStartButton() {
    if (startButton) {
      startButton.hidden = false;
    }
  }

  function hideStartButton() {
    if (startButton) {
      startButton.hidden = true;
    }
  }

  function tryPlayWithAudio() {
    video.muted = true;

    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt
        .then(function () {
          video.muted = false;
          video.volume = 1;
          window.setTimeout(function () {
            if (video.paused) {
              showStartButton();
            } else {
              hideStartButton();
            }
          }, 300);
        })
        .catch(showStartButton);
    } else {
      video.muted = false;
      video.volume = 1;
      window.setTimeout(function () {
        if (video.paused) {
          showStartButton();
        } else {
          hideStartButton();
        }
      }, 300);
    }
  }

  function startFromGesture() {
    video.muted = false;
    video.volume = 1;
    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt.then(hideStartButton).catch(showStartButton);
    } else {
      hideStartButton();
    }
  }

  if (startButton) {
    startButton.addEventListener("click", startFromGesture);
  }

  document.addEventListener("click", function () {
    if (video.paused) {
      startFromGesture();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tryPlayWithAudio);
  } else {
    tryPlayWithAudio();
  }
})();
