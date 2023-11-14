document.addEventListener('DOMContentLoaded', function () {
  // Function to handle the "MOCKUP" button click
  function handleMockupButtonClick() {
    hideNavbarLinks();
    showContent();
    setLinksWidthAndPadding();
    scrollToTop();
  }

  // Function to hide navbar links
  function hideNavbarLinks() {
    const navBarLinks = ['aboutNav', 'teamNav', 'contactNav'];
    navBarLinks.forEach(linkId => {
      document.getElementById(linkId).style.display = 'none';
    });
  }

  // Function to show content
  function showContent() {
    document.getElementById('body').style.display = 'none';
    document.getElementById('home').style.display = 'inline';
    document.getElementById('body2').style.display = 'block';
    document.getElementById('mock-up-button').style.display = 'inline';
  }

  // Function to set the width of .links to 30% and adjust padding based on zoom level
  function setLinksWidthAndPadding() {
    const linksContainer = document.querySelector('.links');
    linksContainer.style.width = '30%';

    // Detect if the page is zoomed out by comparing visual viewport width and layout viewport width
    const isZoomedOut = window.visualViewport.width < window.innerWidth;
    const paddingValue = isZoomedOut ? '0' : '';
    linksContainer.style.padding = paddingValue;
  }

  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Function to set up smooth scrolling for navigation links
  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(this.getAttribute('href').substring(1));
        showMainContent();
      });
    });
  }

  // Function to scroll to a section
  function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  // Function to show the main content after scrolling
  function showMainContent() {
    document.getElementById('body').style.display = 'block';
    document.getElementById('body2').style.display = 'none';
  }

  // Initial setup
  setupSmoothScrolling();

  // Initialize ScrollReveal
  ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
  });

 // Reveal the main title after a delay
ScrollReveal().reveal('.main-title', { delay: 10 });
ScrollReveal().reveal('.context', { delay: 10, origin: 'right', distance: '300px' });
ScrollReveal().reveal('.context-title', { delay: 100, origin: 'left' });
ScrollReveal().reveal('#text1', { delay: 10, origin: 'left'});
ScrollReveal().reveal('#text2', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.quality', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.sustainable', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.efficient', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.convenient-and-hassle-free', { delay: 10 });
ScrollReveal().reveal('.convenient-and-hassle-free-title', { delay: 10, origin: 'left' });
ScrollReveal().reveal('.advance-watering-system', { delay: 10, origin: 'left', distance: '300px' });
ScrollReveal().reveal('.advance-watering-system-title', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.assistance-log-system', { delay: 10 });
ScrollReveal().reveal('.assistance-log-system-title', { delay: 10, origin: 'left' });
ScrollReveal().reveal('.beneficiaries', { delay: 10 });
ScrollReveal().reveal('.title-link', { delay: 10, origin: 'left' });
ScrollReveal().reveal('.our-purpose', { delay: 10 });
ScrollReveal().reveal('.our-purpose-title', { delay: 10, origin: 'left' });
ScrollReveal().reveal('.our-purpose-text', { delay: 10 });
ScrollReveal().reveal('.project-plan-title', { delay: 10, origin: 'left' });
ScrollReveal().reveal('#project-plan-image', { delay: 10 });
ScrollReveal().reveal('#list1', { delay: 10 });
ScrollReveal().reveal('#list2', { delay: 60 });
ScrollReveal().reveal('#list3', { delay: 110 });
ScrollReveal().reveal('#list4', { delay: 160 });
ScrollReveal().reveal('#list5', { delay: 210 });
ScrollReveal().reveal('#list6', { delay: 260 });
ScrollReveal().reveal('#circle1', { delay: 10 });
ScrollReveal().reveal('#circle2', { delay: 60 });
ScrollReveal().reveal('#circle3', { delay: 110 });
ScrollReveal().reveal('#circle4', { delay: 160 });
ScrollReveal().reveal('#circle5', { delay: 210 });


  // Function to initialize the Typed library
  function initializeTyped() {
    var typed = new Typed(".typewriter", {
      strings: ["of Farming", "Greens with Greenhouses", "Grows in Greenhouses"],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1900,
      loop: true
    });
  }

  // Initial setup for Typed
  initializeTyped();

  // Event listener for the "MOCKUP" button click
  document.getElementById('mock-up-button').addEventListener('click', handleMockupButtonClick);
});
