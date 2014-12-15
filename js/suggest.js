
function legendCubes() {
	$(".container_legend").hide();
	$(".container").show();
	$(".open_legend").show();
}
legendCubes();

function navQuestionsForm() {
	$(".quest-before").click(function() {
		$(".idea-choice").show();
		$(".idea-fill").hide();
	});
}
navQuestionsForm ();

function checkForm() {
	$(".idea-fill").hide();
	$("#first_next").click(function() {
		/*if($('#idea').is(':checked')) {
			console.log("checked !"+$('#idea').val());
		}*/
		var typemaintenance = $( "input:radio[name=idea]:checked" ).val();
		console.log(typemaintenance);

		if( typemaintenance == undefined ) {
			console.log("Veuillez choisir votre type de maintenance");
		} else {
			$(".idea-choice").hide();
			$(".idea-fill").show();
		}

		$( "#idea-form" ).submit(function( event ) {
		  
		  if( $( "#solution" ).val().trim().length > 0 ) {
		  	console.log("ok !");
		  } else {
		  	event.preventDefault();
		  	console.log("Veuillez écrire votre solution pour soumettre votre idée !");
		  }
		});


		

		/*$(".idea-choice").hide();
		$(".idea-fill").show();*/
	});
}
checkForm();