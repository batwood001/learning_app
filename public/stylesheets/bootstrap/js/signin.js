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
<<<<<<< HEAD
=======
      $(".spacerSignin").hide();
      $("#usernameSignin").val('');
      $("#passwordSignin").val('');
      $("#signUpModal").hide();
      $("#logoutBtn").show();
>>>>>>> e0876904d68f41e157b2e701a9643b9427057b02
    })
  })
};

ajaxSignin();