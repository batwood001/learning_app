function ajaxSignup () {
  $('[data-id="sign-up-modal-button"]').click(function() {
    $("authContainer").hide();

    console.log("in signup")
    $.post(
      "/signup",
      {
        first_name: $('[data-id="first_name"]').val(), 
        last_name: $('[data-id="last_name"]').val(), 
        password: $('[data-id="password"]').val(),
        email: $('[data-id="email"]').val(),
        role: 'student' // Temporary until we come up with a solution to identify instructors
      }
    ).success(function () {
      console.log("signup success")
      // inform user of successful signup, hide and clear inputs.
      console.log($('[data-id="username"]').val() + " successfully signed up.");
      $(".authContainer").hide();
    })
  })
};

ajaxSignup();