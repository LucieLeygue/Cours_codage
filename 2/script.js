$( document ).ready(function() {
  
	alert('Hello')
  
	$("p").on("click",function() {

	if ($(this).hasClass('red')) {
    		$(this).removeClass('red');
    	}else{
    		$(this).addClass('red');
    	}
    	$(this).html("Raté, c'était pas un lien...");
	});

});