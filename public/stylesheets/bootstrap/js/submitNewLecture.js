function submitNewLecture() {
	$("form.submit-new-lecture").click(function(e) {
		e.preventDefault()
		console.log("new lecture submitting")
		$.post(
			"/lectures",
			{
			topic: $('[data-id="newLectureName"]').val()
			}	
		).success(function(){
			console.log("lecture successfully committed")
			populateLectureSidebar();
			getTeacherOverview(); // ...for now
		})
	})
}

submitNewLecture();