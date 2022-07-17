
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

// Show/hide nav menu
function toggleAccordion() {
    var panel = document.getElementsByClassName('accordion-panel')[0];
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}

// Progress bar in conferences section
/*
$(document).ready(function(){
    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });

    $(".step01").click( function() {
        $("#line-progress").css("width", "16%");
        $(".2022").addClass("active").siblings().removeClass("active");
    });

    $(".step02").click( function() {
        $("#line-progress").css("width", "32%");
        $(".2021").addClass("active").siblings().removeClass("active");
    });

    $(".step03").click( function() {
        $("#line-progress").css("width", "48%");
        $(".2020").addClass("active").siblings().removeClass("active");
    });

    $(".step04").click( function() {
        $("#line-progress").css("width", "64%");
        $(".2019").addClass("active").siblings().removeClass("active");
    });

    $(".step05").click( function() {
        $("#line-progress").css("width", "80%");
        $(".2018").addClass("active").siblings().removeClass("active");
    });

    $(".step06").click( function() {
        $("#line-progress").css("width", "100%");
        $(".2017").addClass("active").siblings().removeClass("active");
    });
});
*/