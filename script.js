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

	// To Find Percentage Height and Width of the Mousepad
	$('.mousepad').on('mouseenter', function(){
		$('.cursor').show();
	});

	$('.mousepad').on('mouseleave', function(){
		$('.cursor').hide();
	});


	$('.mousepad').on('mousemove', function(event){
		 var position = $(this).position();
     var offset = $(this).offset();
     var x = event.pageX - (offset.left);
     var y = event.pageY - (offset.top);
     // Need to multiply percent variables by the height and width of the lap-screen instead of 100
     var percentFromLeft = (x / 102) * 362;
     var percentFromTop = (y / 48) * 180;

    // When mouseover the mousepad, the cursor will move the same percentage over the lap-screen
     $('.cursor').css({
     		// 'position': 'relative',
     		'left': percentFromLeft,
     		'top': percentFromTop 
     });

     // Displays the x and y coordinate percentages on mousemove of the mousepad
		// $('.lap-screen').text( "pageX: " + percentFromLeft + ", pageY: " + percentFromTop );

	});

		$('.lap-screen').on('mousemove', function(event){
		 			var position = $(this).position();
     			var offset = $(this).offset();
     			var x = event.pageX - (offset.left);
     			var y = event.pageY - (offset.top);
     			var percentFromLeft = x / 362 * 100;
     			var percentFromTop = y / 180 * 100;

			     // Displays the x and y coordinate percentages on mousemove on the lap-screen
			     // $('.lap-bottom').text("pageX: " + x + ", pageY: " + y );


				});

	// To Find Percentage Height and Width of the Laptop Screen
		// $('.lap-screen').on('mouseenter', function(){
		// 	$('.cursor').show();
		// });

		// $('.lap-screen').on('mouseleave', function(){
		// 	$('.cursor').hide();
		// });
	


	// Toggle Lamp On/Off
	$('.switch').on('click', function(){
			$('.bulb').toggleClass('on');
			$('.shade').toggleClass('on');

			$('.light-beam').toggle();

	});


	

});
