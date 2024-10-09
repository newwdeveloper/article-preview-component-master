const shareBtn = document.querySelector(".share-icon");
const socialIcon = document.querySelector(".socialIcons");

shareBtn.addEventListener("click", function () {
  socialIcon.classList.toggle("hidden");
});
