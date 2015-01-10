function studentView () {
  $("#toggleStudentView").click(function() {
    $(".student-overview").show();
    $(".addQuestion").hide();
    $(".toggleStudentView").hide();
    $(".toggleTeacherView").show();
    $(".activeQuestions").hide();
  })
};

function currentQuestion () {
  $("#lecture").click(function() {
    $(".student-overview").hide();
    $(".addQuestion").hide();
    $(".activeQuestions").show();
  })
};

studentView();
currentQuestion();