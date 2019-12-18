$(document).ready(function(){
	const overlay = $('.overlay');
	const modelThanks = $('#thanks');
	const modelDetailedCall = $('#detailed-call');
	const modelQuickCall = $('#quick-call');
	const formCross = $('.model__cross');

	const buttonThanks = $('[data-model=thanks]');
	const buttonDetailedCall = $('[data-model=detailed-call]');
	const buttonQuickCall = $('[data-model="quick-call"]');


	formCross.on('click', (e) => {
		overlay.fadeOut('fast');
		modelThanks.fadeOut('fast');
		modelDetailedCall.fadeOut('fast');
		modelQuickCall.fadeOut('fast');
	});

	buttonThanks.on('click', (e) => {
		e.preventDefault();
		overlay.fadeIn('fast');
		modelThanks.fadeIn('fast');
	});

	buttonDetailedCall.on('click', (e) => {
		overlay.fadeIn('fast');
		modelDetailedCall.fadeIn('fast');
	});

	buttonQuickCall.on('click', (e) => {
		overlay.fadeIn('fast');		
		modelQuickCall.fadeIn('fast');
	});


	$('.reviews').slick({
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: "<a href='#' class='previous'><img src='./icons/arrow.svg'></a>",
		nextArrow: "<a href='#' class='next'><img src='./icons/arrow.svg'></a>",
	});


	$('input[name=phone]').mask("+7 (999) 999-99-99");
	new WOW().init();
	
	$("form").validate();
	alert('asd')
});





