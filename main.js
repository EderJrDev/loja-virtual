// smooth scrolling 
document.addEventListener("DOMContentLoaded", function () {
  var smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

  smoothScrollLinks.forEach(function (smoothScrollLink) {
    smoothScrollLink.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// swiper banner 

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});

// swiper clothing 

var swiperClothing = new Swiper('.swiper-clothing', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
});
