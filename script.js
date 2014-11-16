

var keys = document.querySelectorAll('.buttons span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;





	$('.buttons').on('click', function(){

		// console.log(this);
		var activeButton = $(this).addClass('active');
		var removeActive = $('.active').removeClass('active');
		var activeSpan = $(activeButton).find('span');
		var activeValue = $(activeSpan).text();

		var input = document.querySelector('.inner-screen');
		var inputVal = input.innerHTML;

		// Makes the button that is clicked active
		activeButton;

		// // Removes active class from all buttons, to reset
		// removeActive;

		if(activeValue == 'C'){
			input.innerHTML = '';
			console.log(inputVal);
		}

		if(parseInt(activeValue) || activeValue == 0){
			$('.inner-screen').append('<span>' + activeValue + '</span>');
		} else{
			console.log(activeValue);
		}

	});

	$('.clear').on('click', function(){

	})


	var addActiveClass = function(){

	}




	// var find = $('.first').find('.buttons:last-child');
	// var search = $('.inner-screen')

	// $('.first').on('click', function(){
	// 	$(find).on('click', function(){
	// 		return search.remove('span');
	// 	});
	// });


	var addValue = function(x, y){
		return x + y;
	}

