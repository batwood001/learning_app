function teacherView () {
  // $("#toggleTeacherView").click(function() {
    $(".addQuestion").show();
    $(".student-overview").hide();
    $(".toggleStudentView").show();
    $(".toggleTeacherView").hide();
    $(".studentOverviewLink").hide();
    $(".teacherOverviewLink").show();
    
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
