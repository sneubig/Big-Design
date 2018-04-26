$( document ).ready(function() {
	
	// Toggle Lamp On/Off
	$('.switch').on('click', function(){
		$('.bulb').toggleClass('light-on');
		$('.light-beam').toggle();
		var lampInstruction = document.getElementById('lampInstruction');
		console.log('lampInstruction: ' + lampInstruction);
		var lampInstructionMessage = lampInstruction.innerHTML;
		console.log('lampInstructionMessage: ' + lampInstructionMessage);
		$(lampInstruction).css('text-decoration', 'line-through');
		console.log('lampInstructionMessage AFTER: ' + lampInstructionMessage);
	});



});


