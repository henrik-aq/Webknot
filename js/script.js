var navHamburger      = document.getElementById("nav__hamburger");
var navHamburgerLines = document.querySelectorAll("#nav__hamburger div");
var navMenu           = document.getElementById("nav__menu");
var navMenuAnchor     = document.querySelectorAll("#nav__menu a");
var viewportWidth;

// constantly update the viewport width
setInterval(function() {
  viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (viewportWidth >= 960) {
    navMenu.classList.add("nav-is-active");
    navMenu.classList.remove("nav-not-active");
    for (let i=0; i < navHamburgerLines.length; i++) {
      navHamburgerLines[i].classList.add("hamburger-is-active");
    }
  }
}, 1000/60);


// EVENT LISTENERS
navHamburger.addEventListener("click", toggleMenu);

for (var i = 0; i < navMenuAnchor.length; i++) {
  navMenuAnchor[i].addEventListener("click", function() {
    if (viewportWidth < 960) {
      toggleMenu();
    }
  });
}


// FUNCTIONS
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

/* Smooth scrolling */
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top-80
   }, 500);
});
