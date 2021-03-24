function toggleSound() {
  var audioElem = document.getElementById('audio');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}
