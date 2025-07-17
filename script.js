document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleDark");
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  console.log("Portfolio loaded");
});
