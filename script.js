"use strict";
const headerEl = document.getElementById("header-text");
const fullText = "OBINNA MICHAEL,\nA CERTIFIED WEB DEVELOPER";
let idx = 0;

function typeHeader() {
  if (idx < fullText.length) {
    if (fullText.charAt(idx) === "\n") {
      headerEl.innerHTML += "<br>";
    } else {
      headerEl.textContent += fullText.charAt(idx);
    }
    idx++;
    setTimeout(typeHeader, 100);
  }
}

window.onload = typeHeader;
