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
    } else if ((teamPage.getBoundingClientRect().top <= 0) && (contactPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#team']").classList.add('active');
    } else if (contactPage.getBoundingClientRect().top <= 0) {
        document.querySelector("a[href='#contact']").classList.add('active');
    }
});

// Toggle between viewing student and associate membership info
$('.team-togglers').on('click', function(event) {

    // Do nothing if selected toggler is already active
    if ($(event.target).hasClass('active-toggler')) {
        return;
    }

    // Hide both swipers initially
    $('.team-swiper').hide();

    // Show swiper whose id contains the matching exec type
    var id = (event.target.id).split('-')[0];
    $(".team-swiper[id^='" + id + "']").show();

    // Change active toggler styling
    $('.team-togglers').removeClass('active-toggler');
    $(event.target).addClass('active-toggler');
});