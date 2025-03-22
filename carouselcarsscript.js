document.addEventListener("DOMContentLoaded", () => {
  const imgCarousel = document.querySelector(".carousel-slider");
  const slider = new MicroSlider(imgCarousel, {
    indicators: true,
    indicatorText: "",
  });
  const hammer = new Hammer(imgCarousel);
  const timer = 1500;
  let autoplay = setInterval(() => slider.next(), timer);

  imgCarousel.onmouseenter = function (e) {
    clearInterval(autoplay);
  };

  imgCarousel.onmouseleave = function (e) {
    clearInterval(autoplay);
    autoplay = setInterval(() => slider.next(), timer);
  };

  imgCarousel.onclick = function (e) {
    clearInterval(autoplay);
  };

  hammer.on("tap", function (e) {
    clearInterval(autoplay);
  });

  hammer.on("swipe", function (e) {
    clearInterval(autoplay);
    autoplay = setInterval(() => slider.next(), timer);
  });

  let slideLink = document.querySelectorAll(".carousel");
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href != "#") window.open(href, target);
      })
    );
  }
});
