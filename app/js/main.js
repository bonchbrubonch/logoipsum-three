$(function () {
	$("#example_id").ionRangeSlider({
		min: 100,
		max: 25000,
		from: 10000,
		postfix: " lei"
	});

	$(".accordeon dd").hide().prev().click(function () {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
		$("dl").removeClass("open");
		$(this).parent().toggleClass("open");
	});

	// Відкриваємо перший елемент за замовчуванням і додаємо клас open до dl
	$(".accordeon dl:first").addClass("open").find("dt:first").addClass("active").next("dd").show();



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

