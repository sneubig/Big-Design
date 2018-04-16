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

		operator = $(this).text();

		// Convert String to Integers before passing to calculate function
		number = parseInt(number, 10);


		if(newnumber === undefined){
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
	});

	function calculateResult(number1, number2){
		if (operator === "+") {
	      result = parseInt(number1) + parseInt(number2); 
	  } else if (operator === "-"){
	      result = parseInt(number1) - parseInt(number2);
	  } else if (operator === "/"){
	      result = eval(parseInt(number1) / parseInt(number2));
	  } else if (operator === "x"){
	      result = eval(parseInt(number1) * parseInt(number2));
	  }
	  
	  return result;
	};


});