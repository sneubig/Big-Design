

var keys = document.querySelectorAll('.buttons span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

var input = document.querySelector('.inner-screen');



	$('.buttons').on('click', function(){

		// console.log(this);
		var activeButton = $(this).addClass('active');
		var removeActive = $('.active').removeClass('active');
		var activeSpan = $(activeButton).find('span');
		var activeValue = $(activeSpan).text();

		// console.log(activeSpan);
		// console.log(activeValue);

		// Makes the button that is clicked active
		activeButton;

		// Removes active class from all buttons, to reset
		removeActive;

		if(parseInt(activeValue) || activeValue == 0){
			$('.inner-screen').append('<span>' + activeValue + '</span>');
		} else{
			console.log(activeValue);
		}

	});


	var addActiveClass = function(){

	}




	var find = $('.first').find('.buttons:last-child');
	var search = $('.inner-screen')

	$('.first').on('click', function(){
		$(find).on('click', function(){
			return search.remove('span');
		});
	});


	var addValue = function(x, y){
		return x + y;
	}

