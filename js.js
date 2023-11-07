//carousel NOT WORKING YET

document.addEventListener("DOMContentLoaded", function () {
  var carouselTrack = document.querySelector(".carousel-track");
  new Dragdealer(carouselTrack, {
    steps: 3,
    speed: 0.3,
    loose: true,
    requestAnimationFrame: true,
  });
});
