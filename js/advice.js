

 moment.lang('fr');
$.ajax({
	type: 'GET',
	url: "server/get-advice.php",
    dataType: 'JSON',
	success: function(data){
		console.log(data);
		var today = moment().format("YYYY-MM-DD");
		var datetoday = moment(today);
		var rect_top = 0;
		var rect_left = 0;
		var rect_right = 0;

		$(".inspiration_area").append("<div class='filter_popup'><div class='popup_losange'></div></div>");
		$(".filter_popup").hide();

		$.each(data, function(i,item){

			//console.log(today);
			//console.log(datemoment);
			var datemoment = moment(item.created_at).format("YYYY-MM-DD");
			var dateadvice = moment(datemoment);
			//console.log(datemoment);
			 
			//console.log('Difference is ', datetoday.diff(dateadvice, 'days'), 'days');
			diffdate = datetoday.diff(dateadvice, 'days');

			switch(true) {
				case  diffdate <= 7:
				width_cube = 300;
				break;

				case  diffdate > 7 && item.count_problems <=15:
				width_cube = 200;
				break;

				case  diffdate > 15 && diffdate <=20:
				width_cube = 150;
				break;

				case  diffdate > 20 && diffdate <=30:
				width_cube = 100;
				break;

				case  diffdate > 30:
				width_cube = 50;
				break;

			}

			console.log(item.category);

			switch(item.category) {
				case 'vente':
				rect_top = "#009AA6";
				rect_left = "#00AAA5";
				rect_right = "#009696";
				break;

				case 'applicatif':
				rect_top = "#0088CE";
				rect_left = "#008BBC";
				rect_right = "#009FD6";
				break;

				case 'matériel':
				rect_top = "#D2E100";
				rect_left = "#E8E800";
				rect_right = "#D1D100";
				break;

				case 'réseau':
				rect_top = "#E05206";
				rect_left = "#ED4E07";
				rect_right = "#E05206";
				break;

				case 'données':
				rect_top = "#D52B1E";
				rect_left = "#E02820";
				rect_right = "#C1231B";
				break;

				case 'après-vente':
				rect_top = "#82BE00";
				rect_left = "#89AF00";
				rect_right = "#9BC600";
				break;
			}



			var svgcube = "<svg version='1.1' class='cube' width='"+ width_cube +"' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 37 42' enable-background='new 0 0 37 42' xml:space='preserve'>"+
			"<g id='"+ i +"'>"+ 
			"<polygon fill='"+rect_right+"' points='36.8,10.8 18.5,21.3 18.5,41.9 36.8,31.3 	'/>"+
			"<polygon fill='"+rect_top+"' points='18.3,0.2 36.8,10.8 18.5,21.3 0.2,10.8 	'/>"+
			"<polygon fill='"+rect_left+"' points='0.2,10.8 18.5,21.3 18.5,41.9 0.2,31.2 	'/>"+
		"</g>"+
"</svg>";
			$(".inspiration_area").append(svgcube);
		});

 		$(".cube g").click(function() {
 			//$(".popup_losange").toggle();
 			//$(this).parent().delay(1000).css("position", "relative").css("z-index", "1");
 			$(this).parent().attr("class", "cube clickedcube");
 			$(".filter_popup").fadeIn();
 			console.log("clicked svg");
 			var idcube = $( this ).attr("id");
 			var num_advice = +idcube + 1;
 			var date_cube = moment(data[idcube]["created_at"]).fromNow();

 			$(".popup_losange").html("<h2>Conseil n°"+ num_advice +"</h2><h3>Panne "+ data[idcube]["category"] +"</h3><p>"+ data[idcube]["solution"] +"</p><p>"+ date_cube +"</p><a class='close_losange' href='#'></a>");
 			//$(".popup_losange").css("position", "relative").css("z-index", "10");
 			$(".close_losange").click(function() {
 				$(".filter_popup").fadeOut();
 				$(".inspiration_area svg").attr("class", "cube");
 			});
 		});


 		
 		

	}
		
});


	