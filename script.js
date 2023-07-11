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
 


///////////////////////// Show/hide the button based on scroll position//////////////////////////////

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#goToTopBtn').fadeIn();
    } else {
      $('#goToTopBtn').fadeOut();
    }
if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('#goToTopBtn').css('bottom', '80px');
  } else {
    $('#goToTopBtn').css('bottom', '10px');
  }
  });

  // Scroll to top when the button is clicked
  $('#goToTopBtn').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800); // Adjust the animation speed as desired
  });





///////////////////////////////////////// Image Slider Home///////////////////////////////////////

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

  ///////////////////////////////////////// Auto Hide Nav menu///////////////////////////////////////
  var links = document.querySelectorAll('.nav a');
  var checkbox = document.getElementById('menu-toggle');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      checkbox.checked = false;
    });
  }

///////////////////////////////////////// Auto Hide Nav menu///////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.querySelector('.toggle-button');
  var headerHeight = document.querySelector('.header').offsetHeight;
  var content = document.getElementById('content');

  toggleButton.addEventListener('click', function() {
    if (content) {
      content.style.paddingTop = headerHeight + 'px';
    }
  });

  var menuItems = document.querySelectorAll('.menu a');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var targetId = item.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var offset = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });
});



  
});




