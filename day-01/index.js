// Function to play the sound corresponding to a key press
function playSound(event) {
  const audioElement = document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  const keyElement = document.querySelector(
    `.key[data-key="${event.keyCode}"]`
  );

  if (!audioElement) return; // Exit function if no audio element found

  audioElement.currentTime = 0; // Rewind to the start
  audioElement.play();

  // Add styling to the key element when pressed
  keyElement.classList.add("playing");
}

// Function to remove the styling after transition ends
function removeTransition(event) {
  if (event.propertyName !== "transform") return; // Skip if it's not a transform
  this.classList.remove("playing");
}

// Event listeners
window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
