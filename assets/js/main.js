$(document).ready(function(){
    // Owl Carousel js
    $(".blog-carousel").owlCarousel({
        margin: 20,
        loop: true,
        responsiveClass:true,
        autoplay: true,
        responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });

    $(".testimonial-carousel").owlCarousel({
        margin: 20,
        loop: true,
        responsiveClass:true,
        autoplay: true,
        items:1,
    });

    // smooth scroll
    $('a').smoothScroll({
        speed: 500,
    });
    

  });

//   AOS js
AOS.init({
    duration: 600,
    easing: 'ease-in-out',
});

// Typed js
var typed = new Typed('.hero-bio-text', {
    // Waits 1000ms after typing "First"
    strings: ['Web Designer', 'Web Developer'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
  });

  var typed = new Typed('.about-bio-text', {
    // Waits 1000ms after typing "First"
    strings: ['Freelancer', 'Web Designer', 'Web Developer'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
  });
  