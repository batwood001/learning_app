function populateStudentLandingPage() {
	console.log("getLectures called")
	$.get("/lectures", function ( data ) {
		var parsed = jQuery.parseJSON( data );
		console.log("parsed JSON data from getLectures: " + parsed)
		parsed.forEach(function(lecture) {
			$(".addQuestion").before(
				"<tr><td>" + 
				lecture["id"] + 
				"</td><td>" + 
				lecture["topic"] + 
				"</td><td>" + 
				lecture["question"] + 
				"</td><td>" + 
				lecture["correct_answer"] + 
				"</td><td>" + 
				lecture["response"] + 
				"</td></tr>")
		})
	})
};