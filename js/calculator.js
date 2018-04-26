$( document ).ready(function() {

	var testNumLength = function(number) {
	    if (number.length > 9) {
	        totaldiv.text(number.substr(number.length-9,9));
	        if (number.length > 15) {
	          number = "";
	          totaldiv.text("Err");
	        }
	    } 
	  };

	var number = "";
	var newnumber = "";
	var operator = "";
	var result = "";
	var totaldiv = $("#total");

	$('#buttons').on('click', function(){
		$('a').on('click', function(){
			$(this).addClass('active');
			$(this).removeClass('active');
		});
	});

	$(".numbers").on('click', function(){
		number += $(this).text();
		console.log(number);
		totaldiv.text(number);
		testNumLength(number);
	});

	$(".operators").on('click', function(){

		console.log('result: ' + result);
		console.log('number: ' + number);
		console.log('newnumber: ' + newnumber);

		
		
		// Calculate new result if operator is selected in long calculation
		if(result !== ""){
			// If this is not the first operator in a multi-chained calculation then we want to use the previous operator to
			// calculate the result, before using the newly clicked operator
			result = calculateResult(result, number);

			// Store the newly clicked operator for the next operation that will be calculated
			operator = $(this).text();
			
			newnumber = number;
			number = '';
		}else{
			operator = $(this).text();
			// Add condition to ensure that a valid number is entered first, rather than an operator
			if(number === NaN || number === ""){
				result = 0;

			} else {
				// Convert String to Integers before passing to calculate function
				number = parseInt(number, 10);

				if(newnumber === NaN || number === NaN){
					newnumber = number;
				}else{

					if(result !== ""){
		  			// Calculate the new result
		  			result = calculateResult(result, number);

		  			testNumLength(result);
		  		}else{
		  			// Set Result for the first number in operation
		  			result = number;
		  		}
		  	}

		  	newnumber = number;
		  	number = '';
		  	
		  }
		}
			console.log('result END: ' + result);
	  	totaldiv.text(result);

		
	});

	$("#clear").on('click', function(){
		number = "";
		newnumber = "";
		result = "";
		totaldiv.text("0");
	});

	//Add your last .click() here!
	$('#equals').on('click', function(){
		// Add condition to ensure that a valid number is entered first, rather than an equal
		if(number === NaN || number === ""){
			result = 0;
		} else{
			number = parseInt(number, 10);
			newnumber = parseInt(newnumber, 10);

			if(result !== ""){
				result = calculateResult(result, number);

				totaldiv.text(result);
				testNumLength(result);
				number = result;
				newnumber = '';
			}else{
				result = number;
			}

			newnumber = number;
			number = '';
		}
	  
	});

	function calculateResult(number1, number2){
		if (operator === "+") {
	      result = parseInt(number1 + number2); 
	  } else if (operator === "-"){
	      result = parseInt(number1 - number2);
	  } else if (operator === "/"){
	      result = parseInt(number1 / number2);
	  } else if (operator === "x"){
	      result = parseInt(number1 * number2);
	  }
	  
	  return result;
	};


});