$( document ).ready(function() {
	
	// Toggle Lamp On/Off
	$('.switch').on('click', function(){
		$('.bulb').toggleClass('light-on');
		$('.light-beam').toggle();

		// Strike Through Lamp Instruction 
		strikeThroughLampInstruction();
	});



});


function strikeThroughLampInstruction(){
	var lampInstruction = document.getElementById('lampInstruction');
	$(lampInstruction).css('text-decoration', 'line-through');
};


