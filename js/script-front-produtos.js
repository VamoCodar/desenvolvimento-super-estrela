//função que adiciona a classe mobile ou desktop dependendo do tamanho da tela
const body = document.querySelector("body");
const botaoMenuMobile = document.querySelector(".hamburguer");
const botaoMenuMobileA = document.querySelector(".hamburguer a");
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

//SLIDER
new JSR(["#jsr-1-1", "#jsr-1-2"], {
  sliders: 2,
  values: [25, 500],
  min: 1.0,
  max: 1000.0,
  grid: false,
  labels: {
    formatter: (value) => {
      return value.toString() + " €";
    },
  },
});
body.addEventListener("click", targetMenu);
botaoMenuMobile.addEventListener("click", abreMenu);
window.addEventListener("resize", resize);
