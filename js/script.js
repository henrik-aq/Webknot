var navHamburger  = document.getElementById("nav-hamburger");
var navHamburgerLines = document.querySelectorAll("#nav-hamburger div");
var navMenu       = document.getElementById("nav-menu");

console.log(navHamburgerLines);

navHamburger.addEventListener("click", function() {
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
})
