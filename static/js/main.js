
// Scroll handler

// THIS IS HORRENDOUS CODE - TIDY IT UP NEIL
// stick to either jQuery or JS, be consistent
let container = document.querySelector('.container');
container.addEventListener('scroll', function() {

    let title = document.querySelector('.page-title');

    title.classList.toggle('dark', container.scrollTop > 0 && $('#contact').offset().top != 0)

    if (container.scrollTop > 0 && $('#contact').offset().top != 0) {
        document.getElementById("warcon-logo").src = "static/img/logos/logo-dark.png";
    } else {
        document.getElementById("warcon-logo").src = "static/img/logos/logo-light.png";
    }

    let navLinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('dark', container.scrollTop > 0 && $('#contact').offset().top != 0);
    }

    // DOESN'T WORK
    title.classList.add('hide');

    // Change title based on current section
    // if ($('#about').offset().top == 0) {
    //     title.innerHTML = "Warwick Congress";
    // } else if ($('#conferences').offset().top == 0) {
    //     title.innerHTML = "Conferences";
    // } else if ($('#team').offset().top == 0) {
    //     title.innerHTML = "Our Team";
    // } else if ($('#contact').offset().top == 0) {
    //     title.innerHTML = "Contact Us";
    // } else {
    //     title.innerHTML = " ";
    // }

    // DOESN'T WORK
    title.classList.remove('hide');
})
