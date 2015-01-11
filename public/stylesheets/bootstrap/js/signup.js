function ajaxSignup () {
 
  $('#sign-up-modal-button').click(function() {
    $(".authContainer").hide();

    console.log("in signup");
    console.log("first_name: " + $('[data-id="first_name"]').val());
    console.log("email: " + $('[data-id="email"]').val());
    console.log("password: " + $('[data-id="password"]').val());
   //the following should be turned in to a single function, because DRY
    $.post(
      "/signup",
      {
        first_name: $('[data-id="first_name"]').val(), 
        last_name: $('[data-id="last_name"]').val(), 
        password: $('[data-id="signup-password"]').val(),
        email: $('[data-id="signup-email"]').val(),
        role: 'student' // Temporary until we come up with a solution to identify instructors
      }
    ).success(function (data) {
      console.log(data)
      var object = jQuery.parseJSON(data)
      // console.log("signup success")
      // inform user of successful signup, hide and clear inputs.
      // console.log($('[data-id="first_name"]').val() + " successfully signed up.");
      $(".authContainer").hide();
      $("#signUpModal").hide();
      $("#logoutBtn").show();
      $(".currentUser").show();
      $(".mainContent").show();
      $(".splash").hide();
      $(".sidebar").show();
      $(".navBar").show();      
      $(".currentUser").text(object['first_name'].toUpperCase());
    })
  })
};

function enterSignup () {
  
  $('#signUpForm').keypress(function(e) {
    if ((e.keyCode == 13) && (e.target.type != "textarea")) {
      e.preventDefault();
      $(".authContainer").hide();

      console.log("in signup");
      console.log("first_name: " + $('[data-id="first_name"]').val());
      console.log("email: " + $('[data-id="email"]').val());
      console.log("password: " + $('[data-id="password"]').val());
      $.post(
        "/signup",
        {
          first_name: $('[data-id="first_name"]').val(), 
          last_name: $('[data-id="last_name"]').val(), 
          password: $('[data-id="signup-password"]').val(),
          email: $('[data-id="signup-email"]').val(),
          role: 'student' // Temporary until we come up with a solution to identify instructors
        }
      ).success(function (data) {
        var object = jQuery.parseJSON(data)
        // console.log("signup success")
        // inform user of successful signup, hide and clear inputs.
        // console.log($('[data-id="first_name"]').val() + " successfully signed up.");
        $(".authContainer").hide();
        $("#signUpModal").hide();
        $("#logoutBtn").show();
        $(".currentUser").show();
        $(".mainContent").show();
        $(".sidebar").show();
        $(".navBar").show();
        $(".splash").hide();
        $(".currentUser").text(object['first_name'].toUpperCase());
      });
    }
  });
};

ajaxSignup();
enterSignup();