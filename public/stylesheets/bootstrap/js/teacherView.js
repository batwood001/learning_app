function teacherView () {
  $("#toggleTeacherView").click(function() {
    $(".addQuestion").show();
    $(".toggleStudentView").show();
    $(".toggleTeacherView").hide();
  })
};

teacherView();