//your JS code here. If required.
window.addEventListener("DOMContentLoaded", () => {
  const existing = document.getElementById("existing");
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username && password) {
    existing.style.display = "inline-block";
  }
});

alert("Logged in as <username>");
