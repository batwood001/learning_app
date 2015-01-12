function studentView () {
  // $("#toggleStudentView").click(function() {
    console.log("studentView called")
    $(".student-overview").show();
    $(".addQuestion").hide();
    $(".toggleStudentView").hide();
    $(".toggleTeacherView").show();
    $(".activeQuestions").hide();
    $(".teacher-overview").hide();


  // })
}

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
    console.log("getStudentOverview called")
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

// studentView();
// currentQuestion();
// getStudentOverview();
// hideMain();
