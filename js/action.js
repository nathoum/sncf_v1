function introLegend() {
	$(".close_legend").click(function(e) {
		e.preventDefault();
		$(".open_legend").delay(1200).fadeIn();
		$(".legend_cubes").removeClass("fromTopToBottom");
		$(".legend_cubes").addClass("fromBottomToTop");
		$(".container_legend").delay(300).fadeOut();
	})

	$(".open_legend").click(function(e) {
		e.preventDefault();
		$(this).hide();
		$(".container_legend").show();
		$(".legend_cubes").removeClass("fromBottomToTop");
		$(".legend_cubes").addClass("fromTopToBottom");
	});
}
introLegend();