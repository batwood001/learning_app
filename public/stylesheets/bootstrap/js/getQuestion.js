function getQuestion() {
	$(document).on("click", ".lecture-topic", function(e) {
		e.preventDefault();
		$(".student-overview").hide();
		$(".addQuestion").hide();
		$(".studentOverviewLink").show();
		$(".teacherOverviewLink").hide();
		$(".activeQuestions").show();
		console.log("a lecture was clicked");
		var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
		var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
		$.get("/lectures/" + $(this).find('a').attr('data-id'), function (data) {
			console.log("the get request worked");
			var parsed = jQuery.parseJSON( data );
			console.log(parsed);
			$(".question-text").html(parsed['question']);
			$(".question-text").attr("data-id", parsed['id']);
			$(".answer-options").find('a').remove();
			for (var element in numbers) {
				if (parsed['answer_' + numbers[element]]) {
					$(".answer-options-bottom").before("<a href='#' class='answer-" + numbers[element] + " list-group-item' data-id='" + letters[element] + "'>" + parsed['answer_' + numbers[element]] + "</a>");
				}
			}
		});
		$(".lecture-topic").removeClass('selected-lecture');
		$(this).addClass('selected-lecture');
	});

	$(document).on("click", "a.answer-options-bottom", function(e) {
		$("a.answer-options-bottom").removeClass('selected-answer');
		$(this).addClass('selected-answer');
	});
}
// getQuestion();