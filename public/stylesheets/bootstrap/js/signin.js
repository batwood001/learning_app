function ajaxSignin() {
  $("form.sign-in").click(function(e) {
    e.preventDefault()
    console.log("in click")
    $.post(
      "/signin",
      {
      email: $('[data-id="email"]').val(),
      password: $('[data-id="password"]').val()
      }
    ).success(function (data) {
      console.log(typeof data);
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