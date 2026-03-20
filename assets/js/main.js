
function main() {
	(function () {
		'use strict'
		//Script
		//-----------------------------------
		jQuery(document).ready(function ($) {
			var wd = $(window).width();

			var wd = jQuery(window).width();
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
			});
		});

	}());
}
main();