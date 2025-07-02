function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

 const words = ["Author", "Developer", "Chef", "Baker", "Photographer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetweenWords = 1000;

const animatedText = document.getElementById("animatedText");

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    animatedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, erasingSpeed);
    }
  } else {
    animatedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (animatedText) type();
});
