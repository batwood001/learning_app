function ajaxSignin() {
  $("#signinBtn").click(function() {
    console.log("in click")
    $.post(
      "/signin",
      {
      email: $('[data-id="email"]').val(),
      password: $('[data-id="password"]').val()
      }
    ).success(function (data) {
      console.log("signin success")
      $(".authContainer").hide();
      $("#signUpModal").hide();
      $("#logoutBtn").show();
      getLectures();
      $("#currentUser").text[data['first_name']];
    })
  })
};


ajaxSignin();