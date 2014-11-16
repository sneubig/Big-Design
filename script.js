$(document).ready(function(){
	$('.buttons').on('click', function(){

		// console.log(this);
		var activeButton = $(this).addClass('active');
		// var removeActive = $('.active').removeClass('active');
		var activeSpan = $(activeButton).find('span');
		var activeValue = $(activeSpan).text();

		var input = document.querySelector('.inner-screen');
		var inputVal = input.innerHTML;

		// Makes the button that is clicked active
		activeButton

		// If clear button is pressed, erase everything
		if(activeValue == 'C'){
			input.innerHTML = '';
			console.log(input.innerHTML);
		}

		if(activeValue == '+'){
			console.log(activeValue + "hey");
			input.innerHTML += activeValue;
		}

		if(parseInt(activeValue) || activeValue == 0){
			$('.inner-screen').append('<span>' + activeValue + '</span>');
			console.log(activeValue);
		} 

	});


	// var addActiveClass = function(input1, input2){
	// 	return input1 + input2;
	// };




	// var find = $('.first').find('.buttons:last-child');
	// var search = $('.inner-screen')

	// $('.first').on('click', function(){
	// 	$(find).on('click', function(){
	// 		return search.remove('span');
	// 	});
	// });


	// var addValue = function(x, y){
	// 	return x + y;
	// }
});
