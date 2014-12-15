	var w = 443;	
	var h = 300;
	var barPadding = 40;	
	var total = 0;
	var percentage = 0;
	
	d3.json("server/request-maintenance.php", function(error, data) {
			console.log(data);

			data.forEach(function(d) {
				d.count_theme = +d.count_theme;
				total = total + d.count_theme;
			});

		data.forEach(function(d) {

			d.count_theme = +d.count_theme;

			d.percentage = Math.round(d.count_theme * 100/ total);

			nbbars = 6;


			function drawBarChartPb() {
				var chartbars = d3.select(".chart").attr("width", "443");

				var bar = d3.select(".chart")
				  .selectAll("g")
				    .data(data)
				  .enter().append("g")
				  .attr("class", "groupsvg")
				  .style("perspective",  "900px");
				  
				var rect =  bar.append("rect")
				  		.attr("x", function(d, i) { return i * (w *2/ nbbars) ;})
						.attr("y", function(d) { return h;}) //from bottom to top - before TRANSITION 
				  		.attr("width", w / nbbars - barPadding)
						.attr("height", "0")
						.attr("class", "firstrect")
						.style("fill", function(d) { 
						switch(d.categorytheme) {
								case 'Vente':
								return '#00AEB2'
								break;

								case 'Applicatif':
								return '#009FD6'
								break;

								case 'Materiel':
								return '#E02820'
								break;

								case 'Reseau':
								return '#ED4E07'
								break;

								case 'Donnees':
								return '#E8E800'
								break;

								case 'Apres-vente':
								return '#9BC600'
								break;

							}
					} );
						
				var rectbis =  bar.append("rect")
				  		.attr("x", function(d, i) { return i * (w *2/ nbbars) + (w / nbbars - barPadding) ;})
						.attr("y", function(d) { return h;}) //from bottom to top - before TRANSITION 
				  		.attr("width", w / nbbars - barPadding)
						.attr("height", "0")
						.style("fill", function(d) { 
						switch(d.categorytheme) {
								case 'Vente':
								return '#009093'
								break;

								case 'Applicatif':
								return '#008BBC'
								break;

								case 'Materiel':
								return '#C1231B'
								break;

								case 'Reseau':
								return '#D14507'
								break;

								case 'Donnees':
								return '#D1D102'
								break;

								case 'Apres-vente':
								return '#89AE00'
								break;
							}
					} )
						.attr("transform-origin", "50% 50%");


				var recttop = bar.append("rect")
						.attr("x", function(d, i) { return i * (w *2/ nbbars) ;})
						 .attr("y", function(d) { return h - Math.round(d.count_theme * 100/ total) * 5;}) //after transition
						.attr("width", w / nbbars - barPadding)
						.attr("height", function(d) { return 40;})
						.style("opacity", "0")
						.style("fill", function(d) { 
						switch(d.categorytheme) {
								case 'Vente':
								return '#009AA6'
								break;

								case 'Applicatif':
								return '#0088CE'
								break;

								case 'Materiel':
								return '#D52B1E'
								break;

								case 'Reseau':
								return '#E05206'
								break;

								case 'Donnees':
								return '#D2E100'
								break;

								case 'Apres-vente':
								return '#82BE00'
								break;
							}
					} );

				  var text = bar.append("text")
				  	.text(function(d) { return d.categorytheme; })
					.attr("text-anchor", "middle")
					.attr("opacity", "1")
					.attr("x", function(d, i) { return i * (w *2/ nbbars) + (w / nbbars - barPadding) + 45;})
					.attr("y", function(d) { return h + 40})
					.style("fill", "white");

					var grouptext = bar.append("g");

					var legendrect = grouptext.append("rect")
						.attr("x", function(d, i) { return i * (w *2/ nbbars) + 20 ;})
						.attr("y", function(d) { return (h - Math.round(d.count_theme * 100/ total) * 5 - 90) ;})
						.attr("width", "55")
						.attr("height", "30")
						.style("transform", "skew(0deg)")
						.style("fill", function(d) { 
						switch(d.categorytheme) {
								case 'Vente':
								return '#009AA6'
								break;

								case 'Applicatif':
								return '#0088CE'
								break;

								case 'Materiel':
								return '#D52B1E'
								break;

								case 'Reseau':
								return '#E05206'
								break;

								case 'Donnees':
								return '#D2E100'
								break;

								case 'Apres-vente':
								return '#82BE00'
								break;
							}
					} );		


					var legend = grouptext.append("text")
						.text(function(d) { return Math.round(d.count_theme * 100/ total)+ "%"; })
				  		.attr("x", function(d, i) { return i * (w *2/ nbbars) +40 ;})
						.attr("y", function(d) { return (h - Math.round(d.count_theme * 100/ total) * 5 - 70) ;})//from bottom to top - before TRANSITION 
				  		.attr("width", ( w / nbbars - barPadding) * 2)
						.attr("height", "40")
						.style("fill", "white");

				

					var losange = bar.append("rect")
						.attr("x", function(d, i) { return i * (w *2/ nbbars) + 8;})
						.attr("y", function(d) { return h + 25;})//from bottom to top - before TRANSITION 
						.attr("width", "20")
						.attr("height", function(d) { return 20;})
						.attr("class", "losange")
						.style("fill", function(d) { 
						switch(d.categorytheme) {
								case 'Vente':
								return '#009AA6'
								break;

								case 'Applicatif':
								return '#0088CE'
								break;

								case 'Materiel':
								return '#D52B1E'
								break;

								case 'Reseau':
								return '#E05206'
								break;

								case 'Donnees':
								return '#D2E100'
								break;

								case 'Apres-vente':
								return '#82BE00'
								break;
							}
					} );

					animateBarChartPb(rect, rectbis, recttop);
					bar.on('mouseover', function(d) {
					  	console.log("hover");
					  	d3.select(this).selectAll("g > text").style("font-size", "0.9em");
					});

					  bar.on('mouseout', function(d) {
					  d3.select(this).selectAll("g > text").style("font-size", "0.8em");
					});	
					

					

			} //end drawBarChartPb() function
			drawBarChartPb();

			function animateBarChartPb(rect, rectbis, recttop) {
				/****** TRANSITIONS ******/
					//Les barres s'élèvent au chargement - transition for the bars		
					rect.transition()
					  .duration(2000)
					  .attr("y", function(d) { return h - Math.round(d.count_theme * 100/ total) * 5;}) //after transition
					  .attr("height", function(d) { return Math.round(d.count_theme * 100/ total) * 5;});
					  
					  rectbis.transition()
					  .duration(2000)
					  .attr("y", function(d) { return h - Math.round(d.count_theme * 100/ total) * 5;}) //after transition
					  .attr("height", function(d) { return Math.round(d.count_theme * 100/ total) * 5;})



					  recttop.transition()
					  .duration(4000)
					  .style("opacity", "1");	  

			}

			function resetAnimationBarChartPb(rect, rectbis, recttop) {
				rect.transition()
					  .duration(100)
					  .attr("y", function(d) { return h ;}) //after transition
					  .attr("height",  "0");

				rectbis.transition()
					  .duration(100)
					  .attr("y", function(d) { return h ;}) //after transition
					  .attr("height", "0");

				recttop.transition()
					  .duration(100)
					  .style("opacity", "0");
			}

			function interactionsAnimationsBarChart() {
				var rect = d3.selectAll(".groupsvg .firstrect");
				var rectbis = d3.selectAll(".groupsvg rect:nth-of-type(2)");
				var recttop = d3.selectAll(".groupsvg rect:nth-of-type(3)");

				var buttontarget = d3.select(".fp-slidesNav ul li:nth-child(2) a");
				var buttonfirst = d3.select(".fp-slidesNav ul li:nth-child(1) a");
				var buttonthird = d3.select(".fp-slidesNav ul li:nth-child(3) a");

					buttontarget.on("click", function() {
						animateBarChartPb(rect, rectbis, recttop);
					});


					buttonthird.on("click", function() {
						resetAnimationBarChartPb(rect, rectbis, recttop);
					});

					buttonfirst.on("click", function() {
						resetAnimationBarChartPb(rect, rectbis, recttop);
					});


					$( "body" ).keyup(function( event ) {
						if ( event.which == 37 || event.which == 39 ) {
							setTimeout(function(){ 
								if ($("body").hasClass("fp-viewing-info-slide2")) {
									animateBarChartPb(rect, rectbis, recttop);
								} else {
									resetAnimationBarChartPb(rect, rectbis, recttop);
								}

							}, 200);
						}
					});


			}
			interactionsAnimationsBarChart();

			/*function responsiveBarChart() {
				//transform: translate(-150px, 250px);
				var groupsvg = d3.selectAll(".groupsvg:nth-of-type(3)");
				console.log($( window ).width());
				var widthpage = $( window ).width();
				if(widthpage < 500) {
					groupsvg.style("fill", "black");
					groupsvg.style("transform", function(d, i) { return "translate(-310px, 250px)";} );
				}

				

			}
			responsiveBarChart();*/

			function responsiveBarChart() {
				//transform: translate(-150px, 250px);
				var groupsvg = d3.selectAll(".groupsvg");
				console.log($( window ).width());
				var widthpage = $( window ).width();
				if(widthpage < 500) {
					groupsvg.attr("transform", "translate(300, 0) rotate(90)");
				}

				

			}
			responsiveBarChart();





			

			

			/*buttonthird.on("click", function() {
				//
				rect.transition()
					  .duration(100)
					  .attr("y", function(d) { return h ;}) //after transition
					  .attr("height",  "0");

				rectbis.transition()
					  .duration(100)
					  .attr("y", function(d) { return h ;}) //after transition
					  .attr("height", "0");

				recttop.transition()
					  .duration(100)
					  .style("opacity", "0");
			});*/

					
			



		



			



		});
	});


	

	

