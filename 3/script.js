$( document ).ready(function() {
 	
 	alert('Prêt à relever un défi tous les jours ?\n Alors on est ti-par !')
	
	function welcome() {
   	$("#welcome").html('<h4>Bienvenue, <br> choisis ton défi et impressionne-nous !</h4>');
	}; 

	function getUsername() {
    //affiche une boite de dialogue 
    var  user = prompt("Mais pour commencer, donne-nous ton petit nom ?", "");
    // la fonction se termine en retournant le nom récupéré par la boite de dialogue
    return user
	}; 

	function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> soyez pret à renouveler de nouveaux défis ! </h4>');
	};
welcome();

});
