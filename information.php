<?php 
	include("server/db_param.php");

?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <title>SNCF - information</title>

		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
		<link href="css//jquery.fullPage.css" rel="stylesheet" />
		<link rel="stylesheet" href="css/main.css" type="text/css">
		<link rel="stylesheet" href="css/information.css" type="text/css">

	</head>

	<body>
		<section id="content">
			<a class="logo_sncf" href="#"></a>
			<a class="logo_cubes" href="index.html"></a>
			<div id="fullpage">
			     <div class="section">
			     	<div class="slide" id="slide1" data-anchor="slide1">
			     		<div class="slide-content">
							<h1><?php echo $_SESSION['station'] ?></h1><a class="help-info" href="#">i</a>
							<div class="info-day">
								<h2>Le <span>6</span> Mars 2014</h2>
								<p>Le total des ventes était égal à</p>
								<p><span>1247</span> EUROS</p>
							</div>
						</div>
						<div class="push-info">
							<a class="close_info" href="#"></a>
							<h3>Votre gare en direct</h3>
							<h4>Mars 2014</h4>
							<p>RER E</p>
							<p>Zone 1</p>
							<div class="key-info">
								<p><span>6721</span><br/>voyageurs</p>
								<p><span>23</span><br/>agents SNCF</p>
							</div>
							<a href="search.html" class="change-station">Changer de gare</a>
						</div>
						<div class="svg_area">
							<svg class="chart-sales"></svg>
						</div>
					</div> <!--  end slide 1 -->

					<div class="slide" id="slide2" data-anchor="slide2">
						<div class="slide-content">
							<h1><?php echo $_SESSION['station'] ?></h1>
							<svg class="chart"></svg>
						</div>
					</div>
					<div class="slide" id="slide3" data-anchor="slide3">
						<div class="slide-content">
							<h1><?php echo $_SESSION['station'] ?></h1>
							<p>Slide 3</p>
						</div>
					</div>

					</div>


				</div> <!-- end div section -->
			</div> <!-- end fullpage -->
		</section>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script src="js/jquery.fullPage.js"></script> <!-- full page :navigation slides -->
		<script src="js/d3.min.js"></script> <!-- d3.js : datavisualisation library -->
		<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.4.0/moment-with-langs.js"></script> <!-- moment.js: dates, time -->
		<script src="js/maintenance.js"></script>
		<script src="js/sales.js"></script>
		<script type="text/javascript">

			$(document).ready(function() {
				$('#fullpage').fullpage({
					autoScrolling: true,
					scrollBar: true,
					slidesNavigation: true,
					anchors:['info'],

					//scrollOverflow: true,
				});

				$(".fp-slidesNav ul li:first-child a").html("Ventes<span></span>");
				$(".fp-slidesNav ul li:nth-child(2) a").html("Maintenance<span></span>");
				$(".fp-slidesNav ul li:nth-child(3) a").html("Rapport<span></span>");
			});

			$(".help-info").click(function() {
				$(".push-info").toggleClass("open-menu");
				$(".slide-content").toggleClass("push-content");
				$(".svg_area").toggleClass("push-svg");
				$(".fp-slidesNav").toggleClass("push-menu");

			});

				$(".close_info").click(function() {
					$(".push-info").removeClass("open-menu");
					$(".slide-content").removeClass("push-content");
					$(".svg_area").removeClass("push-svg");
					$(".fp-slidesNav").removeClass("push-menu");
				});

			/*$(function() {
		   	 $( ".svg_area" ).draggable({ axis: "x" });
		  });*/



		</script>
	</body>
	</html>