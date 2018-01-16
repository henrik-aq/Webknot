var navHamburger  = document.getElementById("nav-hamburger");
var navMenu       = document.getElementById("nav-menu");

navHamburger.addEventListener("click", function() {
  if(navMenu.classList.contains("nav-is-active")) {
    navMenu.classList.add("nav-not-active");
    navMenu.classList.remove("nav-is-active");
  }
  else {
    navMenu.classList.add("nav-is-active");
    navMenu.classList.remove("nav-not-active");
  }
})
