function teacherView () {
  $("#toggleTeacherView").click(function() {
    $(".addQuestion").show();
    $(".student-overview").hide();
    $(".toggleStudentView").show();
    $(".toggleTeacherView").hide();
    $(".activeQuestions").hide();
	$(".studentOverviewLink").hide();
    $(".teacherOverviewLink").show();
  })
};

teacherView();

function getTeacherOverview () {
  $(".teacherOverviewLink").click(function() {
  	$(".student-overview").show();
  	$(".activeQuestions").hide();
  })
}

getTeacherOverview();
