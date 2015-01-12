function submitQuestion () {
  $(document).on('submit', 'form.submitQuestion', function(e) {
    $('form.submitQuestion').submit(function(e) {
      e.preventDefault();
      $.post(
        "/lectures/questions",
        {
          lecture_id: $('.selected-lecture').find('a').attr('data-id'),
          question: $('.question-input-text').val(),
          answer_one: $('.question-input-a').val(),
          answer_two: $('.question-input-b').val(),
          answer_three: $('.question-input-c').val(),
          answer_four: $('.question-input-d').val(),
          answer_five: $('.question-input-e').val(),
          answer_six: $('.question-input-f').val(),
          answer_seven: $('.question-input-g').val(),
          answer_eight: $('.question-input-h').val(),
          correct_answer: $( "#sel1 option:selected" ).text(),
          presentation_state: 'not yet presented'
        }
      ).success(function (data) {
        console.log(data);
        var object = jQuery.parseJSON(data);
        console.log('Question submitted successfully: ', object);
        // inform user of successful signup, hide and clear inputs.
      });
    });
  });
}