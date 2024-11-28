$(function () {
	$("#example_id").ionRangeSlider({
		min: 100,
		max: 25000,
		from: 10000,
		postfix: " lei"
	});
})



var swiper = new Swiper(".partners__slider", {
	slidesPerView: 2,
	grid: {
		rows: 2,
	},
	spaceBetween: 15,
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		576: {
			slidesPerView: 4,
			spaceBetween: 20,
			grid: {
				rows: 2,
			},
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 30,
			grid: {
				rows: 2,
			},
		},
	}
});

