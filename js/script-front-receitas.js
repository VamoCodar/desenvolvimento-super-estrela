//função que adiciona a classe mobile ou desktop dependendo do tamanho da tela
const body = document.querySelector("body");
const botaoMenuMobile = document.querySelector(".hamburguer");
const botaoMenuMobileA = document.querySelector(".hamburguer a");
const menuMobile = document.querySelector(".menu-mobile");
const botaoCategorias = document.querySelector(".categorias-mobile");
const aside = document.querySelector(".aside-container");
const filtro = document.querySelector(".button-filtro");

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

//carousel
//iniializa carousel porte gratis
function owlInitialize3() {
  if ($(window).width() >= 960) {
    $(".relacionados-container").slick("unslick");
  } else {
    $(".relacionados-container").slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      centerMode: false,
      centerPadding: "0px",
      arrows: false,
      variableWidth: true,
      slidesToScroll: 1,
    });
  }
}

//só tem carousel apartir de tal tamanho
//receitas
$(document).ready(function () {
  owlInitialize3();
});
$(window).resize(function () {
  owlInitialize3();
});

body.addEventListener("click", targetMenu);
botaoMenuMobile.addEventListener("click", abreMenu);
window.addEventListener("resize", resize);
botaoCategorias.addEventListener("click", abreCatego);
body.addEventListener("click", fechaCatego);
filtro.addEventListener("click", abreFiltro);
//body.addEventListener("click", fechaFiltro);
