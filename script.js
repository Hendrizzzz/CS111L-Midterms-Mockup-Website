document.addEventListener('DOMContentLoaded', function () {
  var myButton = document.getElementById('mock-up-button');

  // For Mockup Button when clicked
  myButton.addEventListener('click', function () {
    // Set the display property to none and block for the navBar links
    document.getElementById('body').style.display = 'none';
    document.getElementById('aboutNav').style.display = 'none';
    document.getElementById('teamNav').style.display = 'none';
    document.getElementById('contactNav').style.display = 'none';
    document.getElementById('home').style.display = 'inline';
    document.getElementById('body2').style.display = 'block';
    document.getElementById('mock-up-button').style.display = 'inline';

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        // Show the main content again after scrolling
        document.getElementById('body').style.display = 'block';
        document.getElementById('body2').style.display = 'none';
      }
    });
  });
});

 // Initialize ScrollReveal
 ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1500,
});

// Reveal the main title after a delay
ScrollReveal().reveal('.main-title', { delay: 10 });
ScrollReveal().reveal('.context', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.context-title', { delay: 100, origin: 'left' });
ScrollReveal().reveal('#text1', { delay: 10, origin: 'left'});
ScrollReveal().reveal('#text2', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.quality', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.sustainable', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.efficient', { delay: 10, origin: 'right' });
ScrollReveal().reveal('.convenient-and-hassle-free', { delay: 10 });
ScrollReveal().reveal('.convenient-and-hassle-free-title', { delay: 10, origin: 'left' });
ScrollReveal().reveal('.advance-watering-system', { delay: 10, origin: 'left' });
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

var typed = new Typed(".typewriter", {
  strings: ["of Farming", "Greens with Greenhouses", "Grows in Greenhouses"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
});


