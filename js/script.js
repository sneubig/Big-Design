// $(document).ready(function(){


// Calculator
	var number = '';
	var newNumber = '';
	var operator = '';
	var totalVal = '';
	var result = '';
	var inputCount = 0;

	// Adds clicked numbers to the number variable and then sets value to totalVal
	$('.numbers').on('click', function(){
		if(result == ''){
			inputCount++;
			if (inputCount < 2){
				number += $(this).text();
				$('.inner-screen').text(number);
				result = number;
				console.log("number: " + number);
				console.log("result: " + result);
			} else {
				newNumber = $(this).text();
			}
			// number = '';	
		} else{
			newNumber += $(this).text();
			$('.inner-screen').text(newNumber);
		}
		console.log("number: " + number + ", newNumber: " + newNumber);
		
	});

	$('.operators').on('click', function(){
		operator = $(this).text();
		console.log(operator);
		$('.inner-screen').text('');
	});

	// Resets all the variables when clear button is clicked
	$('.clear').on('click', function(){
		number = '';
		result = '';
		newNumber = '';
		operator = '';
		totalVal = '';
		inputCount = 0;
		console.log('Clear Button Worked!');
		$('.inner-screen').text('');
	});

	$('.eval').on('click', function(){
		console.log("num1: " + number + ", operator: " + operator + ", num2: " + newNumber);
		if (operator === " + "){
			result = parseFloat(newNumber) + parseFloat(number);
			console.log("WORK!: " + number);
			console.log(result);
		} else if (operator === " - "){
			totalVal =  parseFloat(number) - parseFloat(newNumber);
			console.log(totalVal);
		} else if (operator === " X "){
			result = parseFloat(newNumber) * parseFloat(number);
			console.log(result);
		} else if (operator === " / "){
			result = parseFloat(number) / parseFloat(newNumber);
			console.log(result);
		} else {
			console.log("didn't catch");
		}

		$('.inner-screen').text(result);
		number = '';
		newNumber = '';

	});

// Laptop 

	// Show cursor when mouse enters the mousepad
	$('.mousepad').on('mouseenter', function(){
		$('.cursor').show();
	});

	// Hide cursor when mouse enters the mousepad
	$('.mousepad').on('mouseleave', function(){
		$('.cursor').hide();
	});

	// To Find Percentage Height and Width of the Mousepad
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
	   	'left': percentFromLeft,
	   	'top': percentFromTop 
	  });

	  // Displays the x and y coordinate percentages on mousemove of the mousepad
		// $('.table').text( "pageX: " + percentFromLeft + ", pageY: " + percentFromTop );
	});

	// Submits the search result if the cursor clicks the submit button
	$('.mousepad-submit-button').on('click', function(event){
		var searchbar = "https://www.google.com/#q=" + $("input[type='text']").val();
		console.log("working");
		event.preventDefault();
		$('#submit-button').submit();
		window.location.href = searchbar;
	})

	// Finds the coordinates of the screen, so can compare with mousepad to determine proportional relations
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

	// To Help Find Percentage Height and Width of the Laptop Screen
		// $('.lap-screen').on('mouseenter', function(){
		// 	$('.cursor').show();
		// });

		// $('.lap-screen').on('mouseleave', function(){
		// 	$('.cursor').hide();
		// });

	// When submit the input from searchbar it will go to the google site 	
	$('form.searchbar').on('submit', function(event){
		event.preventDefault();
		var searchbar = "https://www.google.com/#q=" + $("input[type='text']").val();
		window.location.href = searchbar;
	}); 

	// Turn the laptop screen on/off
	$('#power').on('click', function(){
		$('.lap-screen').toggleClass('screen-off');
		$('.browser').toggle();
		$('.google-logo').toggle();
		$('.searchbar').toggle();
	});

// Lamp
	// Toggle Lamp On/Off
	$('.switch').on('click', function(){
		$('.bulb').toggleClass('light-on');
		$('.light-beam').toggle();
	});

// Pencil
	// Stephen Animation
	// "M9.7,89.4c24.3-9.8,44.7-28.9,56-52.6c1.7-3.6,3.3-7.5,3.4-11.6s-1.7-8.3-5.3-10.3c-2.2-1.2-4.9-1.4-7.4-1.6c-3.9-0.2-8.2-0.4-11.3,2.1c-1.6,1.3-2.7,3.1-3.4,5.1c-3.6,9.2-0.1,20.7,8.1,26.2c3.1,2.1,6.6,3.4,9.8,5.3c11.2,6.7,16.6,21.9,12,34.2c-8.3,6.3-20.7,5.8-29.4,0.1C33.6,80.6,28.3,70.4,27.1,60c9.7,0.1,19.4,3.3,27.3,9 M69.8,89.5c12.7,1.5,24.5-8.3,29.5-20.1c5-11.7,4.8-25,4.6-37.7c-2.4-1.7-6-0.6-7.9,1.6c-2,2.2-2.7,5.2-3.3,8.1c-2,9.5-2.9,19.3-2.7,29c0.1,3.4,0.3,7,1.8,10.1c2.9,6.1,10.8,9.3,17.2,6.9c6.3-2.4,10.1-10.1,8.2-16.6c-6.1,1.8-5.7,12.4,0.3,14.3c6,2,12.6-5,10.9-11.1c2.2,10.9,4.3,21.8,6.5,32.7c-4.2-13.2-5.8-27.2-4.6-40.9c2.7,0,5.3,0.1,8,0.1c2.9,5.6,2.5,12.9-1.1,18.2c6.2,1.1,9.9-6.7,11.1-13c2.7-14.4,4-29,4-43.7c-3.9-0.5-6,4.4-6.6,8.4c-2.1,16.5,0.5,33.6,7.4,48.8c-2-6.8-2.9-16,3.4-19.1c4.2-2.1,9.6,0.4,12.1,4.4c2.6,4,2.9,8.9,2.7,13.6c4.2,1,8.8,0,12.3-2.6c0-4.2,0-8.3,0-12.5c-4.4,0.6-4.8,6.7-4,11.1c5,0,10,0,15,0c0.5-3.2,1.1-6.4,1.6-9.5c-1.1,3.8-0.2,8.2,2.5,11.2c0.2-8.4,9.8-15.1,17.8-12.5c2.8,4,4.7,8.7,5.5,13.6c2.3,0,4.6,0,6.9,0 M74.3,74.5c23.1-17.1,46.3-34.2,69.4-51.3"   

	// Animates the pencil along the svg path
	var path = "M30.7,18.2c-3-3.7,0.2-9.9,4.9-10.8s9.4,2.2,11.8,6.3s3,9,3.4,13.7c2,20.4,2.9,40.9,1.9,61.4c0.3-23.6,0.5-47.3,0.8-70.9c5.9-4,13.4-8.2,19.7-4.8c6.3,3.4,7,11.9,6.9,19c-0.1,10.4-0.2,20.8-0.4,31.2c-0.1,6.8-0.1,13.8,3,19.9c3.1,6,10.2,10.6,16.6,8.3c2.8-6.5,3.8-13.8,2.9-20.9c-2.3,0-4.6,0-6.9,0.1c-3.9,6.5-5.3,14.4-3.9,21.9c5.9,4.8,15.2,4.4,20.9-0.6s7.2-14,3.7-20.8c-0.2,5.5-0.4,11.2,1.9,16.2c2.3,5,7.9,8.9,13.1,7.4c1-8.5,2-17,3-25.5c-2.2,10.1,7.6,21,17.9,19.8c3.7-19.6,4.9-39.6,3.5-59.5c-0.2-3.1-1.4-7.1-4.5-7.2c-3.8,12.4-5.6,25.4-5.5,38.3c0.1,5.8,0.6,11.7,3.4,16.8s8.5,8.8,14.2,7.8c5.7-1,9.8-8.3,6.6-13.1c2.9-0.1,5.8-0.2,8.7-0.2c0,5.6,0,11.3,0,16.9c3.4,1.4,7.2,1.8,10.8,1.2c2.9-6.1,3.9-13.2,2.6-19.9c-3.3,6.8-3.3,15.1,0.1,21.9c1-6.1,2.1-12.2,3.1-18.2c2.3,15.7,4.7,31.4,7,47c0.6,3.8,1.1,7.9-0.6,11.4c-1.7,3.5-6.5,5.7-9.6,3.4c-8.9-5.7-6.1-19.8,0.4-28.1c6.5-8.3,15.9-15.2,18.3-25.5";
		pathAnimator = new PathAnimator( path ),	// initiate a new pathAnimator object
		objToAnimate = document.getElementById('pencil-container'),	// The object that will move along the path
		speed = 12,	 		// seconds that will take going through the whole path
		reverse = false,	// go back of forward along the path
		startOffset = 0		// between 0% to 100%
		
	pathAnimator.start( speed, step, reverse, startOffset);

	function step( point ){
		// Changes the top and left positioning of the path into percentages, to manipulate the size of the SVG path
		objToAnimate.style.cssText = "top:" + (287 + point.y/100 * 40) + "px;" +
																 "left:" + (929 + point.x/100 * 30) + "px;";						
	}

	function finish(){
		console.log("finished!");
	}

	// To find the length of the Neubig SVG Path
	// var path = document.querySelector('.neubig');
	// var length = path.getTotalLength();
	// console.log(length); // 865

// });
