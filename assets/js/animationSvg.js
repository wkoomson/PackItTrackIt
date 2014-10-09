$(document).ready ( function() {
	var s = Snap("#section-2-feature");

	$(document).on("section2First", function(e) {
		s.clear();
		shelf = s.load("/images/section-2-1.svg", function(f) {

		});
	});


	$(document).on("section2Second", function(e) {
		s.clear();
		location = s.load("/images/section-2-2.svg", function(f) {

		});
	});


	$(document).on("section2Third", function(e) {
		s.clear();
		tracking = s.load("/images/section-2-3.svg", function(f) {

		});
	});
});