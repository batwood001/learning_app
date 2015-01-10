function ajaxSignin() {
  $("#signinBtn").click(function() {
    console.log("in click")
    $.post(
      "/signin",
      {
      email: $('[data-id="email"]').val(),
      password: $('[data-id="password"]').val()
      }
    ).success(function () {
      console.log("signin success")
      $(".authContainer").hide();
      $("#signUpModal").hide();
      $("#logoutBtn").show();
    })
  })
};

ajaxSignin();