$( document ).ready(function() {
  
	alert('Hello')
  
	$("p").on("click",function() {

	if ($("p").hasClass('red')) {
    		$("p").removeClass('red');
    	}else{
    		$("p").addClass('red');
    	};

	});

});