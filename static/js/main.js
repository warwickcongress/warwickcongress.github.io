
var container = document.querySelector('.container');
var title     = document.querySelector('.title');
var logoDark  = document.querySelector("#logo-dark");
var navlinks  = document.querySelectorAll(".nav-link");
var about     = document.querySelector('#about')
var contact   = document.querySelector('#contact')
var copyright = document.querySelector('#copyright')

container.addEventListener('scroll', function() {

    // Alter styling of header
    if ((about.getBoundingClientRect().top <= 0) && (contact.getBoundingClientRect().top != 0)) {
        logoDark.classList.remove('hidden');
        title.classList.remove('hidden');
        for (i = 0; i < navlinks.length; i++)
            navlinks[i].classList.add('dark');
    } else {
        logoDark.classList.add('hidden');
        title.classList.add('hidden');
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

$(document).ready(function(){
    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });

    $(".step01").click( function() {
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });

    $(".step02").click( function() {
        $("#line-progress").css("width", "25%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });

    $(".step03").click( function() {
        $("#line-progress").css("width", "50%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });
});