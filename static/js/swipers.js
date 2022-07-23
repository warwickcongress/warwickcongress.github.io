// // Conferences swiper
// var swiper = new Swiper(".team-swiper", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
    // grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });

// Conferences swiper
const confSwiper = new Swiper('.conf-swiper', {
    
    direction: 'horizontal',
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "progressbar",
    },
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


const teamSwiper = new Swiper('.team-swiper', {
    
    direction: 'horizontal',
    loop: true,
    grabCursor: 'true',
    spaceBetween: 25,
    slidesPerView: 4,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   },
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
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