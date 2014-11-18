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
			$('.light-beam').toggle();

	});


// var path = "M9.7,89.4c24.3-9.8,44.7-28.9,56-52.6c1.7-3.6,3.3-7.5,3.4-11.6
//                     s-1.7-8.3-5.3-10.3c-2.2-1.2-4.9-1.4-7.4-1.6c-3.9-0.2-8.2-0.4-11.3,2.1c-1.6,1.3-2.7,3.1-3.4,5.1c-3.6,9.2-0.1,20.7,8.1,26.2
//                                  c3.1,2.1,6.6,3.4,9.8,5.3c11.2,6.7,16.6,21.9,12,34.2c-8.3,6.3-20.7,5.8-29.4,0.1C33.6,80.6,28.3,70.4,27.1,60
//                                  c9.7,0.1,19.4,3.3,27.3,9";

// var pencil = $('.pencil-container');

//   $('.point').on('click', function(){

//   });	

// });


// var link = document.getElementById('searchbar');
// var input = $('#searchbar'.append('<input type="text" value="some text">');

// $('.searchbar').append("<a href='http://www.google.com/' + input + '</a>');

// var parent = document.getElementById('searchbar');
// var sibling = $
// var text = document.createTextNode('new text');
// parent.insertBefore(text, sibling);

});
