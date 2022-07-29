// About swiper
const aboutSwiper = new Swiper('.about-swiper', {
    
    direction: 'horizontal',
    grabCursor: 'true',
    spaceBetween: 20,
    slidesPerView: 5,
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }
});

// Conferences swiper
const confSwiper = new Swiper('.conf-swiper', {
    
    direction: 'horizontal',
  
    pagination: {
        el: '.swiper-pagination',
        type: "progressbar",
        clickable: true,
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Team swiper
const teamSwiper = new Swiper('.team-swiper', {
    
    direction: 'horizontal',
    loop: true,
    grabCursor: 'true',
    spaceBetween: 25,
    slidesPerView: 4,
  
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        }
    }
});
