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
		newnumber = number;
		number = "";
		totaldiv.text("");
	});

	$("#clear").on('click', function(){
		number = "";
		newnumber = "";
		totaldiv.text("0");
	});

	//Add your last .click() here!
	$('#equals').on('click', function(){
	  number = parseInt(number, 10);
	  newnumber = parseInt(newnumber, 10);
	  var result;
	  
	  if (operator === "+") {
	      result = newnumber + number; 
	  } else if (operator === "-"){
	      result = newnumber - number;
	  } else if (operator === "/"){
	      result = newnumber / number;
	  } else if (operator === "x"){
	      result = newnumber * number;
	  }
	  
	  result = result.toString(10);
	  totaldiv.text(result);
	  testNumLength(result);
	  number = '';
	  newnumber = '';
	});
});