let active_link = document.querySelectorAll('#nnaavv a');
let arr_active_link = Array.from(active_link);
arr_active_link.forEach(element => {
  element.addEventListener('click',()=>{

    arr_active_link.forEach(ele =>{
      ele.classList.remove('Nav-link-active')
    })
    element.classList.add('Nav-link-active')
  })
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    
  }
});
// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 4,
//   centeredSlides: true,
//   spaceBetween: 30,
//   grabCursor: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });