window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll == 0) {
    navbar.classList.add("nav-aqua");
  }
  else{
    navbar.classList.remove("nav-aqua");  
  }
});

AOS.init();
