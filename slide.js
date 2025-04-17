const slideShow = function () {
  const slides = document.querySelectorAll(".slideShow .slide");
  const prevButton = document.querySelector(".slideShow .prevButton");
  const nextButton = document.querySelector(".slideShow .nextButton");

  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
      if (i === currentIndex) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  }

  function showNextSlide() {
    currentIndex++;
    showSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex--;
    showSlide(currentIndex);
  }

  prevButton.addEventListener("click", showPrevSlide);
  nextButton.addEventListener("click", showNextSlide);

  // 最初のスライドを表示
  showSlide(currentIndex);
};

slideShow();
