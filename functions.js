function toggleSound() {
  var audioElem = document.getElementById('audio');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}

// setup freezeframe instance with custom selector and options

const manual = new Freezeframe('.freezeframe', {
  trigger: 'click'
});

document
  .querySelector('.toggle')
  .addEventListener('click', () => {
    manual.toggle();
  });


manual.start(); // start animation
manual.stop(); // stop animation
manual.toggle(); // toggle animation
