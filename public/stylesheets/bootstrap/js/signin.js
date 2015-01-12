function ajaxSignin() {
  $("form.sign-in").submit(function(e) {
    e.preventDefault();
    console.log("in click");
    $.post(
      "/signin",
      {
      email: $('[data-id="email"]').val(),
      password: $('[data-id="password"]').val()
      }
    ).success(function (data) {
      var object = jQuery.parseJSON(data);
      console.log("signin success");
      console.log(object);
      $(".authContainer").hide();
      $("#signUpModal").hide();
      $("#logoutBtn").show();
      $(".currentUser").show();
      $(".mainContent").show();
      $(".splash").hide();
      $(".sidebar").show();
      $(".navBar").show();
      $("#background").hide();
      $(".currentUser").text(object['first_name'].toUpperCase());
      $(".overview-role").attr("data-id", object['role'])
      console.log(object['role']);
      if(object['role'] === "student"){
        console.log("a student logged in")
        studentView();
        getStudentOverview();
        populateStudentLandingPage();
        populateLectureSidebar();
        // getQuestion();
      }
      else if (object['role'] === "instructor"){
        console.log("an instructor logged in")
        teacherView();
        getTeacherOverview();
        populateLectureSidebar();
      }
    });
  });
}


// ajaxSignin();