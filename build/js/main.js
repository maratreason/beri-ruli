"use strict";window.addEventListener("DOMContentLoaded",function(){function e(e,t,c,s){function o(){e.matches?(i=new Swiper(t,c),s&&s(i)):void 0!==i&&i.destroy(!0,!0)}var i;(e=window.matchMedia(e)).addEventListener("change",o),o()}function t(t){t&&t.on("slideChange",function(e){console.log("*** mySwiper.activeIndex",t.activeIndex)})}var c,s,o=document.querySelector(".btn-to-up");window.addEventListener("scroll",function(){var e=window.scrollY;o&&300<e?o.classList.add("is--active"):o.classList.remove("is--active")}),o&&o.addEventListener("click",function(){var e=o.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}),c=document.querySelector("[data-mobile-trigger]"),s=document.querySelector("[data-mobile-menu]"),c.addEventListener("click",function(){this.classList.toggle("is--active"),s.classList.toggle("is--active"),this.classList.contains("is--active")?this.style.left="2rem":this.style.left="0"});e("(max-width: 768px)","[data-section-cards-slider]",{loop:!0,slidesPerView:1,pagination:{el:"[data-section-cards-dots]",clickable:!0},someFunc:t}),e("(max-width: 768px)","[data-section-cards-slider-2]",{loop:!0,slidesPerView:1,pagination:{el:"[data-section-cards-dots-2]",clickable:!0},someFunc:t})});var selects=document.querySelectorAll("[data-select]"),accordion=(selects&&selects.forEach(function(o){o.addEventListener("click",function(e){e.preventDefault();var t=o.querySelector(".select__list"),c=o.querySelector("[data-select-icon]"),s=o.querySelector(".select__current span");o.querySelectorAll(".select__item").forEach(function(e){s.textContent===e.textContent&&e.classList.add("select__item--active")}),t.classList.toggle("show"),c.style.transform="rotate(180deg)",t.classList.contains("show")?c.style.transform="rotate(180deg)":c.style.transform="rotate(0deg)",e.target.classList.contains("select__item")&&(s.textContent=e.target.textContent,o.querySelectorAll(".select__item").forEach(function(e){return e.classList.remove("select__item--active")}),e.target.classList.add("select__item--active"),t.classList.remove("show"),c.style.transform="rotate(0deg)")})}),function(e){var c,s,e=document.querySelector(e);e&&(c=e.querySelectorAll("[data-accordion-product-header]"),s=e.querySelectorAll("[data-accordion-product-content]"),c.forEach(function(e,t){e.addEventListener("click",function(e){s[t]&&(c[t].classList.toggle("is--active"),s[t].classList.toggle("is--active"))})}))});accordion("[data-accordion-product]");
//# sourceMappingURL=main.js.map
