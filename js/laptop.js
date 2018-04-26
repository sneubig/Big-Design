$( document ).ready(function() {

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
		if($("#lap-screen").hasClass("macShutdownAnimation")){
			$('.lap-screen').removeClass('macShutdownAnimation').addClass('macStartUpAnimation');
			$('.browser').removeClass('macShutdownAnimation').addClass('macStartUpAnimation');
			$('.google-logo').removeClass('macShutdownAnimation').addClass('macStartUpAnimation');
			$('.searchbar').removeClass('macShutdownAnimation').addClass('macStartUpAnimation');
			$('.browser').delay(4000).fadeToggle();
			$('.google-logo').delay(4000).fadeToggle();
			$('.searchbar').delay(4000).fadeToggle();

		}else{
			$('.browser').toggle();
			$('.google-logo').delay(1000).fadeToggle();
			$('.searchbar').delay(1000).fadeToggle();
			$('.lap-screen').removeClass('macStartUpAnimation');
			$('.lap-screen').addClass('macShutdownAnimation');

			strikeThroughComputerTask();
		}
		//$('.lap-screen').toggleClass('screen-off');
		
		
	});

});



function strikeThroughComputerTask() {
		var laptopInstruction = document.getElementById('laptopInstruction');

		$(laptopInstruction).css('text-decoration', 'line-through');
}