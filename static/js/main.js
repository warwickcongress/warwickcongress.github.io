
var container = document.querySelector('.container');
var logoDark  = document.querySelector("#logo-dark");
var navlinks  = document.querySelectorAll(".nav-link");
var about     = document.querySelector('#about')
var contact   = document.querySelector('#contact')
var copyright = document.querySelector('#copyright')

// Change styling of logo and copyright
container.addEventListener('scroll', function() {

    if ((about.getBoundingClientRect().top <= 0) && (contact.getBoundingClientRect().top != 0)) {
        logoDark.classList.remove('hidden');
        for (i = 0; i < navlinks.length; i++)
            navlinks[i].classList.add('dark');
    } else {
        logoDark.classList.add('hidden');
        for (i = 0; i < navlinks.length; i++)
            navlinks[i].classList.remove('dark');
    }

    // Hide/show copyright on contact page
    if (contact.getBoundingClientRect().top <= 0) {
        copyright.classList.remove('hidden');
    } else {
        copyright.classList.add('hidden');
    }
})

var navLinks = document.querySelectorAll('.link');

// Show/hide nav menu
for (i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        var panel = document.querySelector('#nav-panel');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
