function getLectures() {
	$.get(
		"/lectures",
	).success(function(data){
		for (var lecture in data) {
			$(".addQuestion").before("<tr><td>" + data['id'] + "</td><td>" + data['topic'] + "</td><td>" + data['question'] + "</td><td>" + data['correct_answer'] + "</td><td>" + data['response'] + "</td></tr>")
	})
		}
}