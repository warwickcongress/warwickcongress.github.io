
// Scroll handler
let container = document.querySelector('.container');
container.addEventListener('scroll', function() {

    let title = document.querySelector('.page-title');

    title.classList.toggle('dark', container.scrollTop > 0 && $('#contact').offset().top != 0)

    if (container.scrollTop > 0 && $('#contact').offset().top != 0) {
        document.getElementById("warcon-logo").src = "static/img/logo-dark.png";
    } else {
        document.getElementById("warcon-logo").src = "static/img/logo-light.png";
    }

    let navLinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('dark', container.scrollTop > 0 && $('#contact').offset().top != 0);
    }

    // Change title based on current section
    if ($('#about').offset().top == 0) {
        title.innerHTML = "About";
    } else if ($('#conferences').offset().top == 0) {
        title.innerHTML = "Conferences";
    } else if ($('#team').offset().top == 0) {
        title.innerHTML = "Our Team";
    } else if ($('#contact').offset().top == 0) {
        title.innerHTML = "Contact Us";
    } else {
        title.innerHTML = " ";
    }

    // Change page titles accordingly
    // console.log("Height of contact us: " + $('#contact').offset().top)
})
