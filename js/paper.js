$( document ).ready(function() {
	
	$('#calculationAnswerInput').focusout(function(){
		validateCalculationAnswer();
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
	}
}

