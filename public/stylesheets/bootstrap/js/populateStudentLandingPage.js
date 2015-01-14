function populateStudentLandingPage() {
	console.log("getLectures called");
	$.get("/lectures/responses", function ( data ) {
		var parsed = jQuery.parseJSON( data );
		console.log("parsed JSON data from populateStudentLandingPage: " + parsed);
		parsed.forEach(function(lecture) {
			$(".addQuestion").before(
				"<tr class='question-row'><td>" +
				lecture["id"] +
				"</td><td>" +
				lecture["topic"] +
				"</td><td>" +
				lecture["question"] +
				"</td><td>" +
				lecture["correct_answer"] +
				"</td><td>" +
				lecture["response"] +
				"</td></tr>");
		});
	});
	// getQuestion();
	// console.log("getQuestion called")
}