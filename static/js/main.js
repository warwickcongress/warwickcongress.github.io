
// Scroll handler

// THIS IS HORRENDOUS CODE - TIDY IT UP NEIL
// stick to either jQuery or JS, be consistent
var container = document.querySelector('.container');
var title = document.querySelector('.page-title');
var logoDark = document.querySelector("#logo-dark");
var navlinks = document.querySelectorAll(".nav-link");
var about = document.querySelector('#about')
var contact = document.querySelector('#contact')

container.addEventListener('scroll', function() {

    if ((about.getBoundingClientRect().top <= 0) && (contact.getBoundingClientRect().top != 0)) {
        logoDark.classList.remove('hidden');
        title.classList.add('dark');
        title.classList.remove('hidden');
        for (i = 0; i < navlinks.length; i++)
            navlinks[i].classList.add('dark');
    } else {
        logoDark.classList.add('hidden');
        title.classList.remove('dark');
        title.classList.add('hidden');
        for (i = 0; i < navlinks.length; i++)
            navlinks[i].classList.remove('dark');
    }
})