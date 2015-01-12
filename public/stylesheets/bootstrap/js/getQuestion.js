function getQuestion() {
	$(document).on("click", ".lecture-topic", function(e) {
		e.preventDefault();
		// $(".addQuestion").hide();
		if ($(".overview-role").attr('data-id') === "student") {
			$(".teacher-overview").hide();
			$(".studentOverviewLink").show();
			$(".activeQuestions").show();
			$(".addQuestion").hide();
			$(".addQuestionButton").hide();
			$(".teacherOverviewLink").hide();
			$(".student-overview").hide();
			console.log("showing student")
		} else if ($(".overview-role").attr('data-id') === "instructor") {
			$(".teacher-overview").hide();
			$(".student-overview").hide();
			$(".activeQuestions").hide();
			$(".addQuestion").show();
			$(".addQuestionButton").show();
			$(".teacherOverviewLink").show();
			$(".studentOverviewLink").hide();
			console.log("showing teacher")
		}
		
		console.log("a lecture was clicked");
		var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
		var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
		$.get("/lectures/" + $(this).find('a').attr('data-id') + '/questions', function (data) {
			console.log("the get request worked");
			var parsed = jQuery.parseJSON( data );
			console.log(parsed[0]);
			$(".question-text").html(parsed[0]['question']);
			$(".question-text").attr("data-id", parsed[0]['id']);
			$(".answer-options").find('a').remove();
			for (var element in numbers) {
				if (parsed[0]['answer_' + numbers[element]]) {
					$(".answer-options-bottom").before("<a href='#' class='question-answer list-group-item' data-id='" + letters[element] + "'>" + parsed[0]['answer_' + numbers[element]] + "</a>");
				}
			}
		});
		$(".lecture-topic").removeClass('selected-lecture');
		$(this).addClass('selected-lecture');
	});

	$(document).on("click", "a.question-answer", function(e) {
		e.preventDefault();
		$("a.question-answer").removeClass('selected-answer');
		$(this).addClass('selected-answer');
	});
}
// getQuestion();