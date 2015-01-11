function getQuestion () {
	$(".lecture-topic").click(function(e) {
		e.preventDefault();
		$(".student-overview").hide();
		$(".addQuestion").hide();
		$(".studentOverviewLink").show();
		$(".teacherOverviewLink").hide();
		$(".activeQuestions").show();
		console.log("a lecture was clicked");
		var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
		$.get("/lectures/" + $(this).find('a').attr('data-id'), function (data) {
			console.log("the get request worked");
			var parsed = jQuery.parseJSON( data );
			console.log(parsed);
			$(".question-text").html(parsed['question']);
			$(".answer-options").children().remove();
			for (var element in numbers) {
				if (parsed['answer_' + numbers[element]]) {
					$(".answer-options").append("<a href='#' class='answer-" + numbers[element] + " list-group-item' data-id='" + parsed['answer_' + numbers[element]] + "'>" + parsed['answer_' + numbers[element]] + "</a>");
				}
			}
		});
	});
}

getQuestion();