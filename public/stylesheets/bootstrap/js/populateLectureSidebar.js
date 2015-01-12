function populateLectureSidebar () {
	console.log("populateLectureSidebar called");
	$.get("/lectures", function ( data ) {
		$(".lecture-topic").remove();
		var parsed = jQuery.parseJSON( data );
		parsed.forEach(function(lecture) {
			$("#lecture").append("<li class='lecture-topic'><a href=# data-id='" + lecture["id"] + "'>" + lecture["topic"] + "</a></li>");
		});
	});
	getQuestion();
}	