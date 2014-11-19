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
     var percentFromLeft = (x / 102) * 342;
     var percentFromTop = (y / 48) * 150;

    // When mouseover the mousepad, the cursor will move the same percentage over the lap-screen
     $('.cursor').css({
     		// 'position': 'relative',
     		'left': percentFromLeft,
     		'top': percentFromTop 
     });

     // Displays the x and y coordinate percentages on mousemove of the mousepad
		$('.table').text( "pageX: " + percentFromLeft + ", pageY: " + percentFromTop );

		var submitFromLeft = (x / 118) * 342;
		var submitFromTop = (y / 101) * 150;



	});

	$('.lap-screen').on('mousemove', function(event){
	 			var position = $(this).position();
   			var offset = $(this).offset();
   			var x = event.pageX - (offset.left);
   			var y = event.pageY - (offset.top);
   			var percentFromLeft = x / 342 * 100;
   			var percentFromTop = y / 150 * 100;

		     // Displays the x and y coordinate percentages on mousemove on the lap-screen
		     // $('.lap-bottom').text("pageX: " + x + ", pageY: " + y );
			});


		$('form.searchbar').on('submit', function(event){
			event.preventDefault();
			var searchbar = "https://www.google.com/#q=" + $("input[type='text']").val();
			window.location.href = searchbar;
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



			var path = "M9.7,89.4c24.3-9.8,44.7-28.9,56-52.6c1.7-3.6,3.3-7.5,3.4-11.6s-1.7-8.3-5.3-10.3c-2.2-1.2-4.9-1.4-7.4-1.6c-3.9-0.2-8.2-0.4-11.3,2.1c-1.6,1.3-2.7,3.1-3.4,5.1c-3.6,9.2-0.1,20.7,8.1,26.2c3.1,2.1,6.6,3.4,9.8,5.3c11.2,6.7,16.6,21.9,12,34.2c-8.3,6.3-20.7,5.8-29.4,0.1C33.6,80.6,28.3,70.4,27.1,60c9.7,0.1,19.4,3.3,27.3,9 M69.8,89.5c12.7,1.5,24.5-8.3,29.5-20.1c5-11.7,4.8-25,4.6-37.7c-2.4-1.7-6-0.6-7.9,1.6c-2,2.2-2.7,5.2-3.3,8.1c-2,9.5-2.9,19.3-2.7,29c0.1,3.4,0.3,7,1.8,10.1c2.9,6.1,10.8,9.3,17.2,6.9c6.3-2.4,10.1-10.1,8.2-16.6c-6.1,1.8-5.7,12.4,0.3,14.3c6,2,12.6-5,10.9-11.1c2.2,10.9,4.3,21.8,6.5,32.7c-4.2-13.2-5.8-27.2-4.6-40.9c2.7,0,5.3,0.1,8,0.1c2.9,5.6,2.5,12.9-1.1,18.2c6.2,1.1,9.9-6.7,11.1-13c2.7-14.4,4-29,4-43.7c-3.9-0.5-6,4.4-6.6,8.4c-2.1,16.5,0.5,33.6,7.4,48.8c-2-6.8-2.9-16,3.4-19.1c4.2-2.1,9.6,0.4,12.1,4.4c2.6,4,2.9,8.9,2.7,13.6c4.2,1,8.8,0,12.3-2.6c0-4.2,0-8.3,0-12.5c-4.4,0.6-4.8,6.7-4,11.1c5,0,10,0,15,0c0.5-3.2,1.1-6.4,1.6-9.5c-1.1,3.8-0.2,8.2,2.5,11.2c0.2-8.4,9.8-15.1,17.8-12.5c2.8,4,4.7,8.7,5.5,13.6c2.3,0,4.6,0,6.9,0 M74.3,74.5c23.1-17.1,46.3-34.2,69.4-51.3";
				pathAnimator = new PathAnimator( path ),	// initiate a new pathAnimator object
				objToAnimate = document.getElementById('pencil-container'),	// The object that will move along the path
				speed = 15,	 		// seconds that will take going through the whole path
				reverse = false,	// go back of forward along the path
				startOffset = 0		// between 0% to 100%
				
			pathAnimator.start( speed, step, reverse, startOffset);

			function step( point ){
				// do something every "frame" with: point.x, point.y & angle
				objToAnimate.style.cssText = "top:" + (140 + point.y/50 * 40) + "px;" +
											"left:" + (890 + point.x) + "px;" +
											"position: relative;"
											;
			}

			function finish(){
				console.log("finished!");
			}






});
