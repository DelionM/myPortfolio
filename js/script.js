// animacion de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("php");
    habilidades[3].classList.add("java");
    habilidades[4].classList.add("sql");
    habilidades[5].classList.add("c");
    habilidades[6].classList.add("comunicacion");
    habilidades[7].classList.add("trabajo");
    habilidades[8].classList.add("creatividad");
    habilidades[9].classList.add("dedicacion");
    habilidades[10].classList.add("organizacion");
  }
}

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//detecto el scrolling para aplicar las animaciones
//activar el nav en cada seccion scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  efectoHabilidades();
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remover toggle icon  cuando se hace click en navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal 
ScrollReveal({
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200 
  });

  ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin:'bottom' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
  ScrollReveal().reveal('.about-img', { origin:'left' });

  // typed js
  const typed  = new Typed('.multiple-text', {
    strings: ['Egresado de la Licenciatura en Tecnologías de la información', 'Técnico en procesos de Gestión Administrativa'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay:3000,
    loop:true
  });
