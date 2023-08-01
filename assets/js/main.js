var random = Math.floor(Math.random() * 2000) + 2000;
$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
  }, random);
});
const textElement = document.querySelector(".typing-text");
const text = "Select your language";

let charIndex = 0;

function typeText() {
  textElement.textContent = text.slice(0, charIndex);
  charIndex++;

  if (charIndex > text.length) {
    charIndex = 0;
  }
}
setInterval(typeText, 200);

// start
function persian() {
  window.location.href = "main-persian.html";
}
function english() {
  window.location.href = "main-english.html";
}
