$( document ).ready(function() {
 	
 	alert('Prêt à relever un défi tous les jours ?\n Alors on est ti-par !')

	function getUsername() {
    	//affiche une boite de dialogue 
   	 	var  user = prompt("Mais pour commencer, donne-nous ton petit nom ?", "");
   	 	// la fonction se termine en retournant le nom récupéré par la boite de dialogue
    	return user
	}; 

	function welcome() {
    	var name= getUsername();
    	$("#welcome").html('<h4>Bienvenue '+name+', <br> choisis ton défi et impressionne-nous ! </h4>');
	};
welcome();

	function loadChallenges() {
  		$.ajax(
        	{url: 'https://api.myjson.com/bins/oafk9',
        	type: 'GET',
        	dataType: 'json'} 
  		)
  		.done(function(data) {
    	showChallenge(data);
  		})
  		.fail(function() {
    	alert( "error" );
  		});
	}

	function showChallenge(liste) {
		var data="";
		for ( var i=0; i < liste.length; i++) {
    	data+='<div class="defi">';

		var challenge=liste[i];
    	data+='<h2>'+challenge.nom+'</h2>';
    	data+='<p>'+challenge.description+'</p>';
    	data+='<iframe width="364" height="204" src="'+challenge.youtube+'" frameborder="0" allowfullscreen=""></iframe>'
    	data+="</div>";
  		}
  	$("#defis").html(data);
	}
loadChallenges();

});
