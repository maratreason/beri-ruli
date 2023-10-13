
window.addEventListener("DOMContentLoaded", () => {
  const btnToUp = document.querySelector(".btn-to-up");

  window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    if (btnToUp && scrolled > 300) {
      btnToUp.classList.add("is--active");
    } else {
      btnToUp.classList.remove("is--active");
    }
  });

  if (btnToUp) {
    btnToUp.addEventListener("click", () => {
      const id = btnToUp.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  const mobile = () => {
    const trigger = document.querySelector("[data-mobile-trigger]");
    const mobileMenu = document.querySelector("[data-mobile-menu]");

    trigger.addEventListener("click", function() {
      this.classList.toggle("is--active");
      mobileMenu.classList.toggle("is--active");

      if (this.classList.contains("is--active")) {
        this.style.left = "2rem";
      } else {
        this.style.left = "0";
      }

    });
  }

  mobile();

  // Slider
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function(e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", "[data-section-cards-slider]", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "[data-section-cards-dots]",
      clickable: true,
    },
    someFunc
  });

  resizableSwiper("(max-width: 768px)", "[data-section-cards-slider-2]", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: "[data-section-cards-dots-2]",
      clickable: true,
    },
    someFunc
  });

  
});



// 
// Select input script
//  
// const selects = document.querySelectorAll("[data-select]");

// if (selects) {
//   selects.forEach((select) => {
//     select.addEventListener("click", (e) => {
//       e.preventDefault();
//       const list = select.querySelector(".select__list");
//       const icon = select.querySelector("[data-select-icon]");
//       const current = select.querySelector(".select__current span");

//       select.querySelectorAll(".select__item").forEach((el) => {
//         if (current.textContent === el.textContent) {
//           el.classList.add("select__item--active");
//         }
//       });

//       list.classList.toggle("show");
//       icon.style.transform = "rotate(180deg)";

//       if (list.classList.contains("show")) {
//         icon.style.transform = "rotate(180deg)";
//       } else {
//         icon.style.transform = "rotate(0deg)";
//       }

//       if (e.target.classList.contains("select__item")) {
//         current.textContent = e.target.textContent;
//         select.querySelectorAll(".select__item").forEach((el) => el.classList.remove("select__item--active"));
//         e.target.classList.add("select__item--active");
//         list.classList.remove("show");
//         icon.style.transform = "rotate(0deg)";
//       }
//     });
//   });
// }

// /**
//  * filter select buttons
//  */
// const filter = document.querySelectorAll("[data-filter]");

// if (filter) {
//   filter.forEach((el) => {
//     const current = el.querySelector("[data-filter-text] span");

//     el.addEventListener("click", (e) => {
//       const list = el.querySelector("[data-filter-list]");
//       const arrow = el.querySelector(".filter-arrow");

//       if (list) {
//         list.classList.toggle("is--active");
//       }

//       if (list.classList.contains("is--active")) {
//         arrow.style.transform = "rotate(180deg)";
//       } else {
//         arrow.style.transform = "rotate(0deg)";
//       }

//       if (e.target.classList.contains("filter-item")) {
//         current.textContent = e.target.textContent;
//       }
//     });
//   });
// }

// /**
//  * Range slider
//  */
// function rangeSlider(selector, symbol) {
//   const parent = document.querySelector(selector);

//   if (parent) {
//     const rangeInput = parent.querySelectorAll(".aside-block__range-input input");
//     const priceInput = parent.querySelectorAll(".aside-block__price-input .field input");
//     const progress = parent.querySelector(".aside-block__range .slider .progress");
//     let priceGap = 10;
//     const minPrice = parent.querySelector(".input-min");
//     const maxPrice = parent.querySelector(".input-max");

//     progress.style.left = (parseInt(rangeInput[0].value) / rangeInput[0].max) * 100 + "%";
//     progress.style.right = 100 - (parseInt(rangeInput[1].value) / rangeInput[1].max) * 100 + "%";

//     // range data
//     if (rangeInput) {
//       rangeInput.forEach((input) => {
//         input.addEventListener("input", (e) => {
//           let minVal = parseInt(rangeInput[0].value);
//           let maxVal = parseInt(rangeInput[1].value);

//           if (maxVal - minVal < priceGap) {
//             if (e.target.className === "range-min") {
//               rangeInput[0].value = maxVal - priceGap;
//             } else {
//               rangeInput[1].value = minVal + priceGap;
//             }
//           } else {
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;

//             progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//             progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//             minPrice.value = minVal + ` ${symbol}`;
//             maxPrice.value = maxVal + ` ${symbol}`;
//           }
//         });
//       });
//     }

//     // input field data
//     if (priceInput) {
//       priceInput.forEach((input) => {
//         input.addEventListener("input", (e) => {
//           let minVal = parseInt(priceInput[0].value);
//           let maxVal = parseInt(priceInput[1].value);

//           if (maxVal - minVal >= priceGap && maxVal <= 10000) {
//             if (e.target.classList.contains("input-min")) {
//               rangeInput[0].value = minVal;
//               progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//             } else if (e.target.classList.contains("input-max")) {
//               rangeInput[1].value = maxVal;
//               progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//             }

//             minPrice.textContent = minVal + ` ${symbol}`;
//             maxPrice.textContent = maxVal + ` ${symbol}`;
//           }
//         });
//       });
//     }
//   }
// }

// rangeSlider(".aside-block__price", "₽");
// rangeSlider(".aside-block__square", "㎡");

// /**
//  * Modal script
//  */
// const modal = ($trigger, $modal, $backdrop, $activeClass, $close) => {
//   const modalTriggers = document.querySelectorAll($trigger);
//   const modal = document.querySelector($modal);
//   const backdrop = document.querySelector($backdrop);
//   const close = modal.querySelector($close);

//   if (modalTriggers) {
//     modalTriggers.forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         backdrop.classList.add($activeClass);
//         modal.classList.add($activeClass);
//       });
//     });

//     backdrop.addEventListener("click", (e) => {
//       backdrop.classList.remove($activeClass);
//       modal.classList.remove($activeClass);
//     });

//     close.addEventListener("click", () => {
//       backdrop.classList.remove($activeClass);
//       modal.classList.remove($activeClass);
//     });
//   } else {
//     return false;
//   }
// };

// modal("[data-show-modal]", "[data-modal]", ".backdrop", "is--active", "[data-modal-close]");
// modal("[data-show-modal-2]", "[data-modal-2]", ".backdrop", "is--active", "[data-modal-close]");
// modal("[data-show-modal-3]", "[data-modal-3]", ".backdrop", "is--active", "[data-modal-close]");
// modal("[data-show-modal-4]", "[data-modal-4]", ".backdrop", "is--active", "[data-modal-close]");

// /**
//  * Data size check buttons script
//  */
// const checkButtons = () => {
//   const btns = document.querySelectorAll("[data-size-btn]");

//   if (btns) {
//     btns.forEach((btn) => {
//       btn.addEventListener("click", (e) => {
//         e.preventDefault();

//         e.target.classList.contains("is--active")
//           ? e.target.classList.remove("is--active")
//           : e.target.classList.add("is--active");
//       });
//     });
//   }
// };

// checkButtons();

// const accordion = (parentSelector) => {
//   const parent = document.querySelector(parentSelector);

//   if (parent) {
//     const title = parent.querySelectorAll("[data-accordion-title-id]");
//     const desc = parent.querySelectorAll("[data-accordion-desc-id]");

//     title.forEach((item, index) => {
//       item.addEventListener("click", (e) => {
//         if (desc[index]) {
//           if (title[index].dataset.accordionTitleId === desc[index].dataset.accordionDescId) {
//             desc[index].classList.add("is--active");
//           }
//         } else {
//           desc[index].classList.remove("is--active");
//         }
//       });
//     });
//   }
// };

// accordion("[data-accordion-info]");

// /**
//  * Stepper script
//  */
// // const stepper = () => {

// // }

// const steps = document.querySelectorAll("[data-step]");

// if (steps) {
//   steps.forEach((step, index) => {
//     step.addEventListener("click", (e) => {
//       const dataStep = e.target.closest(".subcatalog-work__item");

//       if (dataStep.dataset.step > index + 1) {
//         steps.forEach((s) => s.classList.remove("active"));
//         step.classList.toggle("active");
//       } else if (dataStep.dataset.step == 1) {
//         step.classList.toggle("active");
//         steps.forEach((s, idx) => {
//           if (idx >= dataStep.dataset.step) {
//             steps[idx].classList.remove("active");
//           }
//         });
//       } else if (dataStep.dataset.step <= index + 1) {
//         steps.forEach((s, idx) => {
//           if (idx <= index) {
//             s.classList.add("active");
//           } else {
//             s.classList.remove("active");
//           }
//         });
//       }
//     });
//   });
// }

// /**
//  * Dropdown buttons
//  */
// const dropdownButtons = document.querySelectorAll("[data-dropdown]");
// if (dropdownButtons) {
//   dropdownButtons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const list = btn.querySelector("[data-dropdown-list]");
//       const current = btn.querySelector("[data-dropdown-current]");
//       const chevron = btn.querySelector(".dropdown__icon-chevron");
//       chevron.style.transform = `rotate(90deg)`;

//       if (list) {
//         list.classList.toggle("is--active");

//         if (chevron) {
//           chevron.style.transform = `rotate(270deg)`;
//         }
//       }

//       if (e.target.classList.contains("dropdown__item")) {
//         current.textContent = e.target.textContent;

//         if (chevron) {
//           chevron.style.transform = `rotate(90deg)`;
//         }
//       }
//     });
//   });
// }

// const main_slider = new Swiper(".main-slider", {
//   loop: true,

//   navigation: {
//     nextEl: ".main-slider__btn--next",
//     prevEl: ".main-slider__btn--prev",
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },

//   1200: {
//     slidesPerView: 9,
//     spaceBetween: 10,
//   },

//   // Буллеты
//   clickable: true,
//   dynamicBullets: true,
// });

// /**
//  * Mobile menu
//  */
// const mobileTrigger = document.querySelector("[data-toggle-menu]");
// const mobileMenu = document.querySelector("[data-mobile-menu]");
// const closeMobileMenu = document.querySelector("[data-mobile-menu-close]");

// mobileTrigger.addEventListener("click", () => {
//   mobileMenu.classList.toggle("is--active");
// });

// closeMobileMenu.addEventListener("click", () => {
//   mobileMenu.classList.remove("is--active");
// });


