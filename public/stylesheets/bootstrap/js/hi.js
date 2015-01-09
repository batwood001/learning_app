function hideMain () {
  $("#lecture").click(function() {
    $(".overview").hide();
    $(".activeQuestions").show();
  })
};

hideMain();