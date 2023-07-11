// script.js

/////////////////JavaScript/jQuery to add smooth scrolling functionality////////////////////////////////


$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 800); // Adjust the animation speed as desired
    }
  });
});



///////////////////////// Show/hide the button based on scroll position//////////////////////////////
$(document).ready(function() { 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#goToTopBtn').fadeIn();
    } else {
      $('#goToTopBtn').fadeOut();
    }
  });

  // Scroll to top when the button is clicked
  $('#goToTopBtn').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800); // Adjust the animation speed as desired
  });
});




///////////////////////////////////////// Slider functionality///////////////////////////////////////
$(document).ready(function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = $(".mySlides");
    let dots = $(".dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }

  
});




