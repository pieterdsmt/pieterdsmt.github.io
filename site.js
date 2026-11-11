const players = document.querySelectorAll("audio, video");

for (const player of players) {
  player.addEventListener("play", () => {
    for (const other of players) {
      if (other !== player) other.pause();
    }
  });

  const errorMessage = document.getElementById(player.dataset.error);
  if (errorMessage) {
    player.addEventListener("error", () => {
      errorMessage.hidden = false;
    });
    player.addEventListener("playing", () => {
      errorMessage.hidden = true;
    });
  }
}
