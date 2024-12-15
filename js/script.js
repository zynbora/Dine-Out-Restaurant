window.addEventListener("load", function () {
  AOS.init();
});

/* Toggle Navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}

/* Close nav when clicking on a nav-item*/
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});

/* Sticky Header*/
window.addEventListener("scroll", function () {
  if (this.scrollY > 60) {
    document.querySelector("header").classList.add("sticky");
  } else {
    document.querySelector("header").classList.remove("sticky");
  }
});

const navTabs = document.querySelector(".nav-tabs");
navTabs.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("nav-link") &&
    !event.target.classList.contains("active")
  ) {
    const target = event.target.getAttribute("data-target");
    navTabs.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    const menuSection = document.querySelector(".menu-section");
    menuSection.querySelector("tab-pane.active").classList.remove("active");
    menuSection.querySelector(target).classList.add("active");
    AOS.init();
  }
});


