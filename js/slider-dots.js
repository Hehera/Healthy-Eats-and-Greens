// 1)знайти картинки ,батьківський елемент картинок,дочірній елемент ,батьківський елемент дочірніх елементів dots

// 2)забрати всі картинки і клас з дочірнього елемента  dots            slider-dots__nav-item--active

// 3)оприділити індекс картинки і відобразити
// 4)відобразити акстивний клас по індексу

// 5)
window.addEventListener("DOMContentLoaded", () => {
  const dotsWrapper = document.querySelector(".slider-dots__items-wrapper");
  // console.log(dotsWrapper);

  const dotsItems = document.querySelectorAll(".slider-dots__items"); //картинки
  // console.log(dotsItems);

  const dotsNavWrapper = document.querySelector(".slider-dots__nav");
  // console.log(dotsNav);

  const dotsNavItem = document.querySelectorAll(".slider-dots__nav-item"); //dots
  // console.log(dotsNavItem);

  function hideTabContent() {
    dotsItems.forEach((item) => {
      item.style.display = "none";
    });
    dotsNavItem.forEach((item) => {
      item.classList.remove("slider-dots__nav-item--active");
    });
  }
  hideTabContent();

  function showTabContent(i = 0) {
    dotsItems[i].style.display = "block";
    dotsNavItem[i].classList.add("slider-dots__nav-item--active");
  }
  showTabContent();

  dotsNavWrapper.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("slider-dots__nav-item")) {
      dotsNavItem.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
