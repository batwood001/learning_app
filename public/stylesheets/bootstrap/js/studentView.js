function studentView () {
  $("#toggleStudentView").click(function() {
    $(".addQuestion").hide();
    $(".toggleStudentView").hide();
    $(".toggleTeacherView").show();
  })
};

studentView();