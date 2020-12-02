//função que adiciona a classe mobile ou desktop dependendo do tamanho da tela
const body = document.querySelector("body");
const botaoMenuMobile = document.querySelector(".hamburguer");
const menuMobile = document.querySelector(".menu-mobile");

function checagem() {
  if (window.innerWidth >= 993) {
    body.classList.add("desktop");
    body.classList.remove("mobile");
  } else {
    body.classList.add("mobile");
    body.classList.remove("desktop");
  }
}
checagem();

//mesma funçao de checagem só que no resize
function resize() {
  if (window.innerWidth >= 1000) {
    body.classList.add("desktop");
    body.classList.remove("mobile");
  } else {
    body.classList.add("mobile");
    body.classList.remove("desktop");
  }
}
//função abrir o menu

function abreMenu() {
  if (body.classList.contains("menu-open")) {
    menuMobile.setAttribute("style", "animation: subidaMenu 300ms both ease;");
    //settimout para rolar a animação antes
    setTimeout(() => {
      body.classList.remove("menu-open");
      body.classList.add("menu-closed");
      menuMobile.removeAttribute("style", "animation");
    }, 300);
  } else {
    body.classList.toggle("menu-open");
    body.classList.toggle("menu-closed");
  }
}
//fecha menu e anima
function targetMenu(event) {
  if (event.target != botaoMenuMobile && body.classList.contains("menu-open")) {
    menuMobile.setAttribute("style", "animation: subidaMenu 300ms both ease;");
    setTimeout(() => {
      body.classList.remove("menu-open");
      body.classList.add("menu-closed");
      menuMobile.removeAttribute("style", "animation");
    }, 300);
  }
}
//clona o filho

/* function clonando() {
  const ovelha = document.querySelectorAll(".ovelha");
  let clone = document.querySelector(".clone-mobile");
  ovelha.forEach((i) => {
    let oi = i.cloneNode(true);
    console.log(oi);
  });
}
clonando(); */
//carrousel bootstrap
$(".carousel").carousel({
  interval: 20500, //depois ajustar, pra n ficar passando
});

/* $(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: false,
    singleItem: true,
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    items: 1,
    1000: {
      center: true,
    },
  });
});
 */
//carrousel slick
//slide mulher
$(".owl-carousel").slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
});

//slide produtos
$(".slick-container").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  centerMode: false,
  centerPadding: "0px",
  arrows: false,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        centerMode: false,
        variableWidth: true,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

/* $(".left").click(function () {
  $(".slider").slick("slickPrev");
});
 */
//categorias

function owlInitialize() {
  if ($(window).width() > 1110) {
    $(".container-cartao").slick("unslick");
  } else {
    $(".container-cartao").slick({
      dots: false,
      infinite: false,
      slidesToShow: 4,
      centerMode: true,
      centerPadding: "0px",
      arrows: false,
      responsive: [
        {
          breakpoint: 1156,
          settings: {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            centerMode: false,
            centerPadding: "0px",
            arrows: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            centerMode: false,
            variableWidth: true,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            centerMode: false,
            variableWidth: true,
          },
        },

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }
}
//só tem carousel apartir de tal tamanho
$(document).ready(function (e) {
  owlInitialize();
});
$(window).resize(function () {
  owlInitialize();
});

// trocar arrows do slick
$(".prox").click(function () {
  $(".container-cartao").slick("slickNext");
});
$(".ant").click(function () {
  $(".container-cartao").slick("slickPrev");
});

body.addEventListener("click", targetMenu);
botaoMenuMobile.addEventListener("click", abreMenu);
window.addEventListener("resize", resize);
