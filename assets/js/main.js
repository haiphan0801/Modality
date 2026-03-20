
function main() {
	(function () {
		'use strict'
		//Script
		//-----------------------------------
		jQuery(document).ready(function ($) {
			var wd = $(window).width();

			var wd = jQuery(window).width();
			$(".hambuger-mobile").on("click", function () {
				$(this).toggleClass("exit");
				$(".wrap-menu-mobile").toggleClass("active");
				$("body").toggleClass("overflow-hidden");
			});
			$(window).on('scroll', function () {
				const scrollTop = $(window).scrollTop();
				const windowHeight = $(window).height();
				const triggerPoint = scrollTop + windowHeight / 0.8;

				$('.what-we-do-item').each(function () {
					const itemTop = $(this).offset().top;
					const distance = triggerPoint - itemTop;
					const range = windowHeight / 0.8;
					const progress = Math.min(Math.max(distance / range, 0), 1);

					const opacity = 0.2 + (0.8 * progress);
					const paddingLeft = 100 - (100 * progress);

					$(this).css({
						opacity: opacity,
					});
				});
			}); const swiper = new Swiper('.built-for-leaders-swiper .swiper', {
				effect: "cards",
				grabCursor: true,

				cardsEffect: {
					rotate: false,
					slideShadows: false,
					perSlideOffset: 8,
					perSlideRotate: 0,
				},
				navigation: {
					nextEl: '.built-for-leaders-next',
					prevEl: '.built-for-leaders-prev',
				},

				pagination: {
					el: '.built-for-leaders-pagination',
					clickable: true,
				},
				loop: false,
			});

			// animation text
			document.addEventListener("DOMContentLoaded", function () {
				const elements = document.querySelectorAll(".typing-fade");
				if (!elements.length) return;

				elements.forEach((el) => {
					const text = el.textContent.replace(/\s+/g, " ").trim();
					el.textContent = "";

					[...text].forEach((char) => {
						const span = document.createElement("span");
						span.textContent = char;
						span.style.color = "rgba(0, 44, 129, 0.40)";
						el.appendChild(span);
					});

					const letters = el.querySelectorAll("span");

					function updateTypingByScroll() {
						const rect = el.getBoundingClientRect();
						const windowHeight = window.innerHeight;

						const start = windowHeight * 0.8;
						const end = windowHeight * 0.2;

						let progress = (start - rect.top) / (start - end);
						progress = Math.max(0, Math.min(1, progress));

						const activeCount = Math.floor(progress * letters.length);

						letters.forEach((letter, index) => {
							letter.style.color = index < activeCount ? "#002C81" : "rgba(0, 44, 129, 0.40)";
						});
					}

					updateTypingByScroll();
					window.addEventListener("scroll", updateTypingByScroll);
				});

				const scrollBtn = document.querySelector(".home-hero-scroll");
				if (!scrollBtn) return;

				scrollBtn.addEventListener("click", function () {
					const currentSection = scrollBtn.closest("section");
					if (!currentSection) return;

					const nextSection = currentSection.nextElementSibling;
					if (nextSection) {
						nextSection.scrollIntoView({
							behavior: "smooth",
							block: "start",
						});
					}
				});
			});

		});

	}());
}
main();