const playSound = (event) => {
  const button = document.querySelector(`button[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (!audio) return;
  button.classList.add("play");

  audio.currentTime = 0;
  audio.play();
  console.log("вызывается");
};
window.addEventListener("keydown", playSound);
