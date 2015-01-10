function ajaxSignin() {
  $("form.sign-in").on('submit', function(e) {
    e.preventDefault()
    console.log("in click2")
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
      getLectures();
    })
  })
};

ajaxSignin();