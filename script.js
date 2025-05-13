
document.addEventListener("DOMContentLoaded", function () {
  const hoverBox = document.getElementById("hoverBox");
  const keyInput = document.getElementById("keyInput");

  hoverBox.addEventListener("mouseover", hoverEffect);
  keyInput.addEventListener("keypress", function (e) {
    console.log("Key pressed:", e.key);
  });
});

function changeText(btn) {
  btn.textContent = btn.textContent === "Click Me!" ? "You clicked me!" : "Click Me!";
}

function hoverEffect() {
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.style.backgroundColor = hoverBox.style.backgroundColor === "coral" ? "lightblue" : "coral";
}

function doubleClickSecret() {
  alert("🎉 You discovered the secret double-click!"); 
}

function showTab(tabId) {
  document.querySelectorAll(".tabContent").forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");
  
  if (!name || !email || password.length < 8) {
    feedback.textContent = "Please fill out all fields correctly.";
    feedback.style.color = "red";
    return false;
  }
  
  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
  return true;
}

document.getElementById("toggleDarkMode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("toggleRetroMode").onclick = () => {
  document.body.classList.toggle("retro-mode");
};

document.getElementById("toggleMusic").onclick = () => {
  if (!window.bgMusic) {
    window.bgMusic = new Audio("https://www.bensound.com/bensound-music/bensound-ukulele.mp3");
    window.bgMusic.loop = true;
  }
  if (window.bgMusic.paused) {
    window.bgMusic.play();
  } else {
    window.bgMusic.pause();
  }
};
