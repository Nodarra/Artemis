/*Intro animation*/
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo-i");

window.addEventListener("DOMContentLoaded", () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("appear");
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("appear");
        span.classList.add("fade");
      }, (idx + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2000);
});

window.scroll(function () {
  $(".header").css("opacity", 1 - $(window).scrollTop() / 900);
});

const navigation = document.querySelector(".navigation");
const sectionOne = document.querySelector(".landing__page");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navigation.classList.add("nav-scrolled");
    } else {
      navigation.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
