var navLinks = document.querySelectorAll('.nav-link');
var navDropdown = document.querySelector('#nav-dropdown');

// Show/hide navigation dropdown menu on click
for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        if (navDropdown.style.maxHeight) {
            navDropdown.style.maxHeight = null;
        } else {
            navDropdown.style.maxHeight = navDropdown.scrollHeight + 'px';
        }
    });
}


// Change styling of logo and nav menu on scroll
document.querySelector('.container').addEventListener('scroll', function() {

    var logoDark = document.querySelector("#logo-dark");
    var aboutPage = document.querySelector('#about');
    var confPage = document.querySelector('#conferences');
    var teamPage = document.querySelector('#team');
    var eventsPage = document.querySelector('#events');
    var photosPage = document.querySelector('#photos');
    var contactPage = document.querySelector('#contact');

    // Show dark logo when not on home or contact page, otherwise show light logo
    if ((aboutPage.getBoundingClientRect().top <= 0) && (contactPage.getBoundingClientRect().top != 0)) {
        logoDark.classList.remove('hidden');
    } else {
        logoDark.classList.add('hidden');
    }

    // Hide nav dropdown menu
    navDropdown.style.maxHeight = null;
    
    // Remove styling for current active nav link
    document.querySelector(".active").classList.remove('active');

    // Enable styling for active nav link
    if (aboutPage.getBoundingClientRect().top > 0) {
        document.querySelector("#home-btn").classList.add('active');
    } else if ((aboutPage.getBoundingClientRect().top <= 0) && (confPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#about']").classList.add('active');
    } else if ((confPage.getBoundingClientRect().top <= 0) && (teamPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#conferences']").classList.add('active');
    } else if ((teamPage.getBoundingClientRect().top <= 0) && (eventsPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#team']").classList.add('active');
    }else if ((eventsPage.getBoundingClientRect().top <= 0) && (photosPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#events']").classList.add('active');
    } else if ((photosPage.getBoundingClientRect().top <= 0) && (contactPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#photos']").classList.add('active');
    } else if (contactPage.getBoundingClientRect().top <= 0) {
        document.querySelector("a[href='#contact']").classList.add('active');
    }
});


// Photos //

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }
