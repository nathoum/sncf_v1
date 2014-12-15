/* sales.js */

	var width = 150;	
	var height = 415;
	var padding = 1;	
	var total = 0;
	var percentage = 0;
	var nbbars = 32;
	
	d3.json("server/request-sales.php", function(error, data) {
		console.log(data);


		var barsales = d3.select(".chart-sales").attr("width", function(d) { return width * 2 * nbbars - 200 ;});

		/*******$$* COMMON STYLES ************/
		/* function that adds content about the station (line, zone, nb of passengers, date of the day)*/
		function addInfoStation() {
			var line = data[0]['line'];	
			var zone = data[0]['zone'];	
			var passengers = data[0]['passengers'];	
			//console.log(data[0]['line']);	  

			/**** jQuery ******/
			$(".push-info p:nth-child(4)").html("RER "+line);
			$(".push-info p:nth-child(5)").html("ZONE "+zone);
			$(".push-info .key-info p:first-of-type span").html(passengers);
			moment.lang('fr');
			console.log("aujourdhui : " + moment().format("DD MMMM YYYY"));
			$(".push-info h4").html(moment().format("DD MMMM YYYY"));

		}
		addInfoStation();
		

		/* function that manages if the sales graphic has to be displayed or not*/
		function hideOrShowSales() {
			setTimeout(function(){ 
				if ($("body").hasClass("fp-viewing-info")) {
					console.log("maintenances1");
					$(".svg_area").show();
				}
				if ($("body").hasClass("fp-viewing-info-slide2")) {
					console.log("maintenances2");
					$(".svg_area").hide();


				}
				if ($("body").hasClass("fp-viewing-info-slide3")) {
					console.log("maintenances3");
					$(".svg_area").hide();
				}

			}, 200); //set timeout (time tooken by the framework to show class)
		}
		hideOrShowSales();



		function interactionNav() {
			$(".svg_area").show();
			$(".fp-slidesNav ul li a").click(function(e) {
				$(".svg_area").hide();
				hideOrShowSales();
			});

			$( "body" ).keyup(function( event ) {
				$(".svg_area").hide();
				if ( event.which == 37 || event.which == 39 ) {
					hideOrShowSales();	
				}
			});
		}
		interactionNav();

		// $(".fp-slidesNav ul li:nth-child(2) a").click(function(e) {
		// 	console.log("alors transitions");
		// 	var rect = d3.select("#slide2 .chart g rect:first-of-type");
		// 	console.log("alors :::" + rect);
		// 			var rectbis = d3.select("#slide2 .chart g rect:nth-of-type(2)");
		// 			var recttop = d3.select("#slide2 .chart g rect:nth-of-type(3)");

					/*** function avec script.js dans fonction pour optimiser le code***/

					/*rect.transition()
					  .duration(2000)
					  .attr("y", function(d) { return h - Math.round(d.count_theme * 100/ total) * 5;}) //after transition
					  .attr("height", function(d) { return Math.round(d.count_theme * 100/ total) * 5;});
					  
					  rectbis.transition()
					  .duration(2000)
					  .attr("y", function(d) { return h - Math.round(d.count_theme * 100/ total) * 5;}) //after transition
					  .attr("height", function(d) { return Math.round(d.count_theme * 100/ total) * 5;})

					  recttop.transition()
					  .duration(4000)
					  .style("opacity", "1");*/
		//});




		
		/***********************************************************/



		





		/***************/
				

		  data.forEach(function(d) {
		  		for (index = 1; index < 32; ++index) {
		  			//console.log(data);
		  			/*var variable = '"'+index+'"';
		  			console.log(variable);*/
		  			//console.log(data[variable]);
		  			console.log(index + " - " + data[0][index]);

				  	//$(".test").html(item.samedi_01 + " - " + item.dimanche_02);
				  	var groupsales = barsales.append("g")
					  .attr("class", "groupsales")
					  .attr("id", index)
					  //.attr("transform", "rotate(90) translate(0, -450)")
					  .style("perspective",  "900px");

				  	var rect_one =  groupsales.append("rect")
				  		.attr("x", function(d) { return index * (width *2/ nbbars) ;})
						.attr("y", function(d) { return height;}) //from bottom to top - before TRANSITION 
				  		.attr("width", width / nbbars - padding)
						.attr("height", "0")
						.attr("id", data[0][index])
						.attr("class", "firstrect")
						.style("fill", "#6D1D77");

					var rect_two =  groupsales.append("rect")
				  		.attr("x", function(d) { return index * (width *2/ nbbars) + (width / nbbars - padding) ;})
						.attr("y", function(d) { return height;}) //from bottom to top - before TRANSITION 
				  		.attr("width", width / nbbars)
						.attr("height", "0")
						.style("fill", "#581C66");

					if( data[0][index] != 0) {
					var rect_three = groupsales.append("rect")
						.attr("x", function(d) { return index * (width *2/ nbbars) ;})
						 .attr("y", function(d) { return height - data[0][index]/190;}) //after transition
						.attr("width", width / nbbars - padding)
						.attr("height", function(d) { return 29;})
						.style("opacity", "0")
						.style("fill", "#6D1D77");	
					}

					var grouptext_days = groupsales.append("g");

					var rect_daystxt = grouptext_days.append("rect")
						.attr("x", function(d) { return index * (width *2/ nbbars) +16 ;})
						.attr("y", function(d) { return height -8;})
						.attr("width", "30")
						.attr("height", "22")
						.style("transform", "skew(0deg)")
						.style("fill", "transparent")
						.style("stroke", "white")
						.style("stroke-width", "1");

					var legend_day = grouptext_days.append("text")
					.text(function(d) { return index; })
			  		.attr("x", function(d) { return index * (width *2/ nbbars) +22 ;})
					.attr("y", function(d) { return height + 8 ;})//from bottom to top - before TRANSITION 
			  		.attr("width", ( width / nbbars - padding) * 2)
					.attr("height", "40")
					.style("fill", "white");

				

					rect_one.transition()
					  .duration(2000)
					  .attr("y", function(d) { return height - data[0][index]/190;}) //after transition
					  .attr("height", function(d) { return data[0][index]/190 ;});

					rect_two.transition()
					  .duration(2000)
					  .attr("y", function(d) { return height - data[0][index]/190;}) //after transition
					  .attr("height", function(d) { return data[0][index]/190 ;});

					rect_three.transition()
					  .duration(4000)
					  .style("opacity", "1");  


					groupsales.on('mouseover', function(d) {
				  		d3.select(this).selectAll("rect.firstrect").style("fill", "white");
				  		d3.select(this).selectAll("rect:nth-of-type(2)").style("fill", "rgba(255,255,255,0.6)");
				  		d3.select(this).selectAll("rect:nth-of-type(3)").style("fill", "white");
				  		
				  		var index_group = d3.select(this).attr("id");
				  		console.log("notre index : " + index_group);
				  		//d3.select(this).selectAll(".slide-content .info-day h2 span").style("color", "black").text(index_group);
				  		/** jQuery : **/
				  		$(".slide-content .info-day h2 span").html(index_group);

				  		var value_rect= d3.select(this).selectAll("rect.firstrect").attr("id");
				  		console.log("value : " + value_rect);
				  		
				  		$(".slide-content .info-day p:nth-of-type(2) span").html(value_rect);

					});

					groupsales.on('mouseout', function(d) {
				  		d3.select(this).selectAll("rect.firstrect").style("fill", "#6D1D77");
				  		d3.select(this).selectAll("rect:nth-of-type(2)").style("fill", "#581C66");
				  		d3.select(this).selectAll("rect:nth-of-type(3)").style("fill", "#6D1D77");
					});
			}

			function responsiveBarChartSales() {
				//transform: translate(-150px, 250px);
				var groupsales = d3.selectAll(".groupsales");
				console.log($( window ).width());
				var widthpage = $( window ).width();
				if(widthpage < 500) {
					groupsales.attr("transform", "rotate(90) translate(150, -450)");
			}

	/*var drag = d3.behavior.drag()
    .on("drag", dragmove);*/

	/*function dragmove(d) {
	  var x = d3.event.x;
	  var y = d3.event.y;
	  d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
	}*/
	/*var drag = d3.behavior.drag()
	.on('dragstart', function () {
	  d3.event.sourceEvent.stopPropagation();
	  console.log("draaag start");
	})
	.on('drag', function (d) {
	  var x = d3.event.x, y = d3.event.y;
	  console.log("drag : x ="+x+" && y="+y);
	 });*/

	

}
responsiveBarChartSales();

		  });

			
	//console.log(total);
	});




	

	

