"use strict";
const headerEl = document.getElementById("header-text");
const fullText = "OBINNA MICHAEL,\nA CERTIFIED WEB DEVELOPER"; // Clean, two lines
let idx = 0;

function typeHeader() {
  if (idx < fullText.length) {
    if (fullText.charAt(idx) === "\n") {
      headerEl.innerHTML += "<br>"; // Add line break for \n
    } else {
      headerEl.textContent += fullText.charAt(idx);
    }
    idx++;
    setTimeout(typeHeader, 100); // 100ms per character
  }
}

window.onload = typeHeader; // Start when page loads
