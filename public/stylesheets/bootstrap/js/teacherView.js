function teacherView () {
  $("#toggleTeacherView").click(function() {
    $(".addQuestion").show();
    $(".student-overview").hide();
    $(".toggleStudentView").show();
    $(".toggleTeacherView").hide();
    $(".activeQuestions").hide();
  })
};

teacherView();