function teacherView () {
  // $("#toggleTeacherView").click(function() {
    $(".student-overview").hide();
    $(".addQuestionButton").hide();
    // $(".toggleStudentView").show();
    // $(".toggleTeacherView").hide();
    $(".studentOverviewLink").hide();
    $(".teacherOverviewLink").show();
    $(".teacher-overview").show();
    $(".activeQuestions").hide();
    // $(".addQuestionButton").show();



  //   $(".teacherOverviewLink").show();
  // })
};

function getTeacherOverview () {
  $(".teacherOverviewLink").click(function() {
  	$(".student-overview").hide();
  	$(".activeQuestions").hide();
    $(".studentOverviewLink").hide();
    $(".teacherOverviewLink").show();
    $(".addQuestionButton").show();
  })
}

teacherView();
getTeacherOverview();
