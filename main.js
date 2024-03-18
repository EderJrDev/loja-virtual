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

//  Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});