document.addEventListener('DOMContentLoaded', function() {
  let modal = document.getElementById("galleryModal");
  let images = document.querySelectorAll(".gallery-item img");
  let modalImg = document.getElementById("imgExpanded");
  let captionText = document.getElementById("caption");
  let currentIndex = 0;

  function shouldOpenModal() {
      return window.innerWidth <= 768;
  }

  images.forEach((img, index) => {
      img.onclick = function() {
          if (shouldOpenModal()) {
              modal.style.display = "block";
              modalImg.src = this.src;
              captionText.innerHTML = this.alt;
              currentIndex = index;
          }
      }
  });

  let span = document.getElementsByClassName("close")[0];
  span.onclick = function() { modal.style.display = "none"; }

  window.changeSlide = function(n) {
      if (!shouldOpenModal()) return;
      currentIndex += n;
      if (currentIndex >= images.length) { currentIndex = 0; }
      else if (currentIndex < 0) { currentIndex = images.length - 1; }
      modalImg.src = images[currentIndex].src;
      captionText.innerHTML = images[currentIndex].alt;
  }
});