document.addEventListener('DOMContentLoaded', function () {
  setupSmoothScrolling();
  initializeScrollReveal();
  initializeTyped();

  // Event listener for the "MOCKUP" button click
  document.getElementById('mock-up-button').addEventListener('click', handleMockupButtonClick);

  function handleMockupButtonClick() {
    hideNavbarLinks();
    showContent();
    setLinksWidthAndPadding();
    scrollToTop();
  }

  function hideNavbarLinks() {
    const navBarLinks = ['aboutNav', 'teamNav', 'contactNav', 'mainContent'];
    navBarLinks.forEach(linkId => {
      document.getElementById(linkId).style.display = 'none';
    });
  }

  function showContent() {
    const bodyElements = ['home', 'body2', 'mock-up-button'];
    bodyElements.forEach(elementId => {
      document.getElementById(elementId).style.display = 'block';
    });
  }

  function setLinksWidthAndPadding() {
    const linksContainer = document.querySelector('.links');
    linksContainer.style.width = '30%';
    const isZoomedOut = window.visualViewport.width < window.innerWidth;
    const paddingValue = isZoomedOut ? '0' : '';
    linksContainer.style.padding = paddingValue;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(this.getAttribute('href').substring(1));
        showMainContent();
      });
    });
  }

  function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  function showMainContent() {
    document.getElementById('body').style.display = 'block';
    document.getElementById('body2').style.display = 'none';
  }

  function initializeScrollReveal() {
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 1500,
    });

    // Reveal the main title after a delay
    ScrollReveal().reveal('.main-title', {
        delay: 10,
        origin: 'top'
    });
    ScrollReveal().reveal('.context', {
        delay: 10,
        origin: 'right',
        distance: '300px'
    });
    ScrollReveal().reveal('.context-title', {
        delay: 100,
        origin: 'left'
    });
    ScrollReveal().reveal('#text1', {
        delay: 10,
        origin: 'left'
    });
    ScrollReveal().reveal('#text2', {
        delay: 10,
        origin: 'right'
    });
    ScrollReveal().reveal('.quality', {
        delay: 10,
        origin: 'right'
    });
    ScrollReveal().reveal('.sustainable', {
        delay: 10,
        origin: 'right'
    });
    ScrollReveal().reveal('.efficient', {
        delay: 10,
        origin: 'right'
    });
    ScrollReveal().reveal('.convenient-and-hassle-free', {
        delay: 10
    });
    ScrollReveal().reveal('.convenient-and-hassle-free-title', {
        delay: 10,
        origin: 'left'
    });
    ScrollReveal().reveal('.advance-watering-system', {
        delay: 10,
        origin: 'left',
        distance: '300px'
    });
    ScrollReveal().reveal('.advance-watering-system-title', {
        delay: 10,
        origin: 'right'
    });
    ScrollReveal().reveal('.assistance-log-system', {
        delay: 10
    });
    ScrollReveal().reveal('.assistance-log-system-title', {
        delay: 10,
        origin: 'left'
    });
    ScrollReveal().reveal('.beneficiaries', {
        delay: 10
    });
    ScrollReveal().reveal('.title-link', {
        delay: 10,
        origin: 'left'
    });
    ScrollReveal().reveal('.our-purpose', {
        delay: 10
    });
    ScrollReveal().reveal('.our-purpose-title', {
        delay: 10,
        origin: 'left'
    });
    ScrollReveal().reveal('.our-purpose-text', {
        delay: 10
    });
    ScrollReveal().reveal('.project-plan-title', {
        delay: 10,
        origin: 'left'
    });
    ScrollReveal().reveal('#project-plan-image', {
        delay: 10
    });
    ScrollReveal().reveal('#list1', {
        delay: 10
    });
    ScrollReveal().reveal('#list2', {
        delay: 60
    });
    ScrollReveal().reveal('#list3', {
        delay: 110
    });
    ScrollReveal().reveal('#list4', {
        delay: 160
    });
    ScrollReveal().reveal('#list5', {
        delay: 210
    });
    ScrollReveal().reveal('#list6', {
        delay: 260
    });
    ScrollReveal().reveal('#circle1', {
        delay: 10
    });
    ScrollReveal().reveal('#circle2', {
        delay: 60
    });
    ScrollReveal().reveal('#circle3', {
        delay: 110
    });
    ScrollReveal().reveal('#circle4', {
        delay: 160
    });
    ScrollReveal().reveal('#circle5', {
        delay: 210
    });
}

  function initializeTyped() {
    var typed = new Typed(".typewriter", {
      strings: ["of Farming", "Greens with Greenhouses", "Grows in Greenhouses"],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1900,
      loop: true
    });
  }
});


// For button arrow up
document.addEventListener('DOMContentLoaded', function () {
  var backToTopButton = document.getElementById('backToTopBtn');

  // Show or hide the button based on scroll position
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  };

  // Smoothly scroll to the top when the 'arrow up' button is clicked
  backToTopButton.onclick = function () {
      document.body.scrollIntoView({ behavior: 'smooth' });
  };
});



const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});





