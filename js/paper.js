$( document ).ready(function() {
	
	// Validate Calculation Answer when focusout of input box
	$('#calculationAnswerInput').focusout(function(){
		validateCalculationAnswer();
	});

	// Validate Calculation Answer when pressing Enter
	$('#calculationAnswerInput').keypress(function(e) {
		if(e.which == 13){
			validateCalculationAnswer();
		}
	});

});

function validateCalculationAnswer() {
	// Get input value
	var answerInput = $('#calculationAnswerInput').val();
	console.log('answerInput: ' + answerInput);

	if(answerInput != 59){
		$('#calculationAnswerInput').css('border-color', 'red');
	}else{
		$('#calculationAnswerInput').css('border-color', 'green');
		strikeThroughMathTask();
	}
}

function strikeThroughMathTask() {
	var calculationInstruction = document.getElementById('calculationInstruction');
	var answerInput = document.getElementById('calculationAnswerInput');


	$(calculationInstruction).css('text-decoration', 'line-through');
	$(answerInput).css('text-decoration', 'line-through');
}

