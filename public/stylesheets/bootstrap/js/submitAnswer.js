function submitAnswer() {
	$("form.answer-options").submit(function(e) {
		e.preventDefault();
		console.log("answer submitting")
		$.post(
			"/lectures/response",
			{
			lecture_id: $('.selected-lecture').find('a').attr('data-id'),
			question_id: $(".question-text").attr("data-id"),
			response: $(".selected-answer").attr("data-id")
			}	
		).success(function(){
			console.log("answer successfully submitted")
			$(".student-overview").show();
		    $(".addQuestion").hide();
		    $(".toggleStudentView").hide();
		    $(".toggleTeacherView").show();
		    $(".activeQuestions").hide();
		    $(".teacher-overview").hide();
		    $(".addQuestionButton").hide();
		    $(".question-row").remove();
		    populateStudentLandingPage();
			 // ...for now
		})
	})

}

submitAnswer();