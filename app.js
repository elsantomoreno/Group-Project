const hamburger = document.getElementsByClassName("hamburger-menue")[0];
const navbarbuttons = document.getElementsByClassName("navbar-rechts")[0];

hamburger.addEventListener("click", () => {
  navbarbuttons.classList.toggle("active");
});
