function ajaxSignout() {
  $("form.sign-out").submit(function(e) {
      $(".authContainer").show();
      $("#signUpModal").show();
      $("#logoutBtn").hide();
      $(".currentUser").hide();
      $(".mainContent").hide();
      $(".splash").show();
      $(".navBar").hide();
    // e.preventDefault();
    // $.post(
    //   "/signout",{}
    // ).success(function (data) {
    //   console.log("signout success");
    //   // console.log(object);
    //   // console.log(object['role']);
    // });
  });
}


// ajaxSignout();