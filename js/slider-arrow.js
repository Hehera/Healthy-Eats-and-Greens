// 1)всі кнопки найшли
// 2)створюємо індекс слайдера
// 3)функція

const sliderArrows = document.querySelector(".slider-arrows"), //весь слайдер
  slidesArrows = document.querySelectorAll(".slider-arrows__items"),// картинки 
  prev = document.querySelector(".slider-arrows__arrow--left"), //кнопка вліво
  next = document.querySelector(".slider-arrows__arrow--right");//кнопка вправо

let slideIndex = 0;

next.addEventListener("click", () => showSlidesArrows(1));

prev.addEventListener("click", () => showSlidesArrows(-1));

function showSlidesArrows(n = 0) {
  //   console.log(showSlidesArrows);

  slideIndex = slideIndex + n;
  //   slideIndex += n;

  if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
  if (slideIndex >= slidesArrows.length) slideIndex = 0;
  slidesArrows.forEach((item) => (item.style.display = "none"));

  slidesArrows[slideIndex].style.display = "block";
}

showSlidesArrows(0);
