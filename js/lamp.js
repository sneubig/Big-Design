$( document ).ready(function() {
	
	// Toggle Lamp On/Off
	$('.switch').on('click', function(){
		$('.bulb').toggleClass('light-on');
		$('.light-beam').toggle();
	});

});


