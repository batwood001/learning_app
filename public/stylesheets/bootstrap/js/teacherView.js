function teacherView () {
  // $("#toggleTeacherView").click(function() {
    $(".student-overview").hide();
    $(".addQuestionButton").show();
    // $(".toggleStudentView").show();
    // $(".toggleTeacherView").hide();
    $(".studentOverviewLink").hide();
    $(".teacherOverviewLink").show();
    $(".teacher-overview").show();



  //   $(".teacherOverviewLink").show();
  // })
};

function getTeacherOverview () {
  $(".teacherOverviewLink").click(function() {
  	$(".student-overview").show();
  	$(".activeQuestions").hide();
    $(".studentOverviewLink").hide();
    $(".teacherOverviewLink").show();
  })
}

teacherView();
getTeacherOverview();
