var navLinks = document.querySelectorAll('.nav-link');
var navDropdown = document.querySelector('#nav-dropdown');

// Change styling of logo, nav menu and copyright on scroll
document.querySelector('.container').addEventListener('scroll', function() {

    var logoDark = document.querySelector("#logo-dark");
    var aboutPage = document.querySelector('#about');
    var confPage = document.querySelector('#conferences');
    var teamPage = document.querySelector('#team');
    var contactPage = document.querySelector('#contact');
    var copyright = document.querySelector('#copyright');

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
        document.querySelector("a[href='#home']").classList.add('active');
    } else if ((aboutPage.getBoundingClientRect().top <= 0) && (confPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#about']").classList.add('active');
    } else if ((confPage.getBoundingClientRect().top <= 0) && (teamPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#conferences']").classList.add('active');
    } else if ((teamPage.getBoundingClientRect().top <= 0) && (contactPage.getBoundingClientRect().top > 0)) {
        document.querySelector("a[href='#team']").classList.add('active');
    } else if (contactPage.getBoundingClientRect().top <= 0) {
        document.querySelector("a[href='#contact']").classList.add('active');
    }

    // Hide/show copyright on contact page
    if (contactPage.getBoundingClientRect().top <= 0) {
        copyright.classList.remove('hidden');
    } else {
        copyright.classList.add('hidden');
    }
});

// Show/hide nav menu
for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        if (navDropdown.style.maxHeight) {
            navDropdown.style.maxHeight = null;
        } else {
            navDropdown.style.maxHeight = navDropdown.scrollHeight + 'px';
        }
    });
}
