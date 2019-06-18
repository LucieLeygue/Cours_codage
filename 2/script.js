$( document ).ready(function() {
  alert('Hello')
  $("p").on( "click", function() {
          $("p").addClass('red');
    });
});