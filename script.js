let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    navbar.style.transform = "translateY(0)";
  } else {
    // Scrolling down, hide the navbar
    navbar.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
};
