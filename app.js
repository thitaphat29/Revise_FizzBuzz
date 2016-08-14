$(document).ready(function(){
	

	function prompt(){
		var input = $("#txtNumber").val();
		return input;
	}


	function validateNumber(str){

		if(str.indexOf('.') == -1){
			//return parseInt(str);
			var convertNum = parseInt(str);		
			
			//if it starts with number or not
			if(isNaN(convertNum)){	
				return NaN;
			}else{
				return convertNum;
			}	
		}else {
			return false;
			
		}
		
	}


	function convertToNumber(str){
		var num = +str;
	
		return num;
	}


	function fizzBuzz(num){
		

		$(".output").html(""); //clear log
		
		for(var i=1; i <= num ; i++){
			var value = "";	   // clear value

			if(i % 3 == 0){
				value = "Fizz";

				if(i % 5 == 0){
					value += "Buzz";
				}
			} 
			else if (i % 5 == 0) {
				value = "Buzz";
			}
			else{
				value = i;
			}

			$(".output").append("<br>"+value+"<br>");
		}
	}


	$("button").on("click", function(e){
		
		// step 1 : get value from textbox
		var getText = prompt();
		
		// step 2 : validate decimal number and parse text to interger number
		var newStr = validateNumber(getText);

		// step 3 : parse data to a function fizzBuzz
		if(!newStr || isNaN(newStr)){
			alert("please enter valid number");
			$("#txtNumber").val(""); // clear textbox
			$(".output").html(""); 	 // clear log
		}else{
		
			fizzBuzz(convertToNumber(newStr));
			
		}	
	});

});

