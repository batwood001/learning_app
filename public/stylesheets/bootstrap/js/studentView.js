function studentView () {
  $("#toggleStudentView").click(function() {
    $(".addQuestion").hide();
    $(".student-overview").show();
    $(".toggleStudentView").hide();
    $(".toggleTeacherView").show();
    $(".activeQuestions").hide();
    $(".studentOverviewLink").show();
    $(".teacherOverviewLink").hide();
  })
};

studentView();

function getStudentOverview () {
  $(".studentOverviewLink").click(function() {
  	$(".student-overview").show();
  	$(".activeQuestions").hide();
  })
}

getStudentOverview();

function hideMain () {
  $("#lecture").click(function() {
    $(".student-overview").hide();
    $(".activeQuestions").show();
  })
};

hideMain();