function ajaxSignout() {
  $("form.sign-out").submit(function(e) {
    e.preventDefault();
    $.post(
      "/signout",{}
    ).complete(function (data) {
      console.log("signout success");
      console.log(object);
      $(".authContainer").show();
      $("#signUpModal").show();
      $("#logoutBtn").hide();
      $(".currentUser").hide();
      $(".mainContent").hide();
      $(".splash").show();
      $(".navBar").hide();
      console.log(object['role']);
    });
  });
}


// ajaxSignout();