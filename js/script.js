$(".customer__inner").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  arrows: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});

let bar = document.querySelector(".header__bar");
let menu = document.querySelector(".menu");
let menu__close = document.querySelector(".menu__close");

bar.addEventListener("click", function () {
  menu.style.opacity = 1;
  menu.style.height = "100%";
});

menu__close.addEventListener("click", function () {
  menu.style.opacity = 0;
  menu.style.height = "0%";
});

let menuLink = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", function () {
    let active = document.querySelector(".menu__link.active");
    active.classList.remove("active");
    menuLink[i].classList.add("active");
  });
}
