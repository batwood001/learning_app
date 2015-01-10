function ajaxSignin() {
  $("#signinBtn").click(function() {
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
      data = data.replace(/:|{|}|,/g, '')
      var array = data.split('"')
      var user_data = []
      for (var index in array){
        if (array[index] !== ""){
          user_data.push(array[index])
        }
      }
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