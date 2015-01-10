function populateLectureSidebar () {
	console.log("populateLectureSidebar called")
	$.get("/lectures", function ( data ) {
		var parsed = jQuery.parseJSON( data );
		parsed.forEach(function(lecture) {
			$("#lecture").append("<li><a href=#>" + lecture["topic"] + "</a></li>")
		})
	}
)}
