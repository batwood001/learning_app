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
      var object = jQuery.parseJSON(data)
      console.log("signin success")
      console.log(object)
      $(".authContainer").hide();
      $("#signUpModal").hide();
      $("#logoutBtn").show();
      getLectures();
      $(".currentUser").text(object['first_name'].toUpperCase());
      if(object['role'] == "student"){
        studentView();
      }
    })
  })
}


ajaxSignin();