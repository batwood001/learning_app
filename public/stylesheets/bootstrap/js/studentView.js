function studentView () {
  // $("#toggleStudentView").click(function() {
    $(".student-overview").show();
    $(".addQuestion").hide();
    $(".toggleStudentView").hide();
    $(".toggleTeacherView").show();
    $(".activeQuestions").hide();
    $(".teacher-overview").hide();
    // $(".sidebar").show();

  // })
};

function currentQuestion () {
  $("#lecture").click(function() {
    $(".student-overview").hide();
    $(".addQuestion").hide();
    $(".studentOverviewLink").show();
    $(".teacherOverviewLink").hide();
  })
};

function getStudentOverview () {
  // $(".studentOverviewLink").click(function() {
  	$(".student-overview").show();
  	$(".activeQuestions").hide();
    $(".studentOverviewLink").show();
    $(".teacherOverviewLink").hide();
  // })
}

function hideMain () {
  $("#lecture").click(function() {
    $(".student-overview").hide();
    $(".activeQuestions").show();
  })
};

studentView();
currentQuestion();
getStudentOverview();
hideMain();
