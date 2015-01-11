function studentView () {
  // $("#toggleStudentView").click(function() {
    $(".student-overview").show();
    $(".addQuestion").hide();
    $(".toggleStudentView").hide();
    $(".toggleTeacherView").show();
    $(".activeQuestions").hide();
    $(".teacher-overview").hide();


  // })
};

// function currentQuestion () {
//   $("#lecture").click(function() {
//     $(".student-overview").hide();
//     $(".addQuestion").hide();
//     $(".studentOverviewLink").show();
//     $(".teacherOverviewLink").hide();
//     $(".activeQuestions").show();
//     getQuestion();
//   })
// };

function getStudentOverview () {
  // $(".studentOverviewLink").click(function() {
    $(".student-overview").show();
    $(".activeQuestions").hide();
    $(".studentOverviewLink").show();
    $(".teacherOverviewLink").hide();
  // })
}

// function hideMain () {
//   $("#lecture").click(function() {
//     $(".student-overview").hide();
//   })
// };

studentView();
// currentQuestion();
getStudentOverview();
// hideMain();
