var navHamburger      = document.getElementById("nav-hamburger");
var navHamburgerLines = document.querySelectorAll("#nav-hamburger div");
var navMenu           = document.getElementById("nav-menu");
var navMenuAnchor     = document.querySelectorAll("#nav-menu a");

console.log(navHamburgerLines);

navHamburger.addEventListener("click", toggleMenu);
for (var i = 0; i < navMenuAnchor.length; i++) {
  navMenuAnchor[i].addEventListener("click", toggleMenu);
}

function toggleMenu() {
  for (let i=0; i < navHamburgerLines.length; i++) {
    navHamburgerLines[i].classList.toggle("hamburger-is-active");
  }
  if(navMenu.classList.contains("nav-is-active")) {
    navMenu.classList.add("nav-not-active");
    navMenu.classList.remove("nav-is-active");
  }
  else {
    navMenu.classList.add("nav-is-active");
    navMenu.classList.remove("nav-not-active");
  }
}
