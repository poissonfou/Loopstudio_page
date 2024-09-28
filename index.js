const chessburguerMenu = document.getElementById("cheeseburger__icon");
const closeMobileMenu = document.getElementById("close__icon__mobile");
const navMobile = document.getElementById("nav__mobile");

chessburguerMenu.addEventListener("click", () => {
  navMobile.classList.add("nav__mobile--active");
});

closeMobileMenu.addEventListener("click", () => {
  navMobile.classList.remove("nav__mobile--active");
});

const interactiveImg = document.getElementsByClassName("interactive__img");
const currentImg = interactiveImg[0].attributes.src;
if (window.innerWidth >= 560) {
  interactiveImg[0].setAttribute("src", "images/desktop/image-interactive.jpg");
}

window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 560 &&
    currentImg != "images/desktop/image-interactive.jpg"
  ) {
    interactiveImg[0].setAttribute(
      "src",
      "images/desktop/image-interactive.jpg"
    );
  }

  if (
    window.innerWidth < 560 &&
    currentImg != "images/mobile/image-interactive.jpg"
  ) {
    interactiveImg[0].setAttribute(
      "src",
      "images/mobile/image-interactive.jpg"
    );
  }
});
