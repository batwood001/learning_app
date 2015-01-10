function ajaxSignin() {
  $("#signinBtn").click(function() {
    $.post(
      "/signin",
      {
      email: $('[data-id="email"]').val(),
      password: $('[data-id="password"]').val()
      }
    ).success(function (data) {
      $(".authContainer").hide();
      $("#signUpModal").hide();
      $("#logoutBtn").show();
      getLectures();
      $("#currentUser").text[data['first_name']];
    })
  })
};


ajaxSignin();