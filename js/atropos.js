"use strict";

function initAtropos() {
  if (typeof Atropos !== "function") {
    console.error("Atropos is not loaded");
    return;
  }

  document.querySelectorAll(".my-atropos").forEach((el) => {
    Atropos({
      el,
      activeOffset: 80,
      rotateXMax: 20,
      rotateYMax: 20,
      shadow: true,
      shadowScale: 1.1,
      highlight: true,
      rotateTouch: "scroll-y",
      duration: 400,
    });
  });
}

window.addEventListener("load", initAtropos);
