function teacherView () {
  // $("#toggleTeacherView").click(function() {
    $(".student-overview").hide();
    $(".addQuestion").show();
    // $(".toggleStudentView").show();
    // $(".toggleTeacherView").hide();
    $(".studentOverviewLink").hide();
    $(".teacherOverviewLink").show();
    $(".teacher-overview").show();
    $(".sidebar").show();


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
