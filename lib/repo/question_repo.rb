module LearningApp
  class QuestionRepo
    def self.create_by_lecture_id(question_info)
      question = Question.new
      question.lecture_id = question_info['lecture_id']
      question.question = question_info['question']

      question.answer_one = question_info['answer_one']
      question.answer_two = question_info['answer_two']
      question.answer_three = question_info['answer_three'] if question_info['answer_three']
      question.answer_four = question_info['answer_four'] if question_info['answer_four']
      question.answer_five = question_info['answer_five'] if question_info['answer_five']
      question.answer_six = question_info['answer_six'] if question_info['answer_six']
      question.answer_seven = question_info['answer_seven'] if question_info['answer_seven']
      question.answer_eight = question_info['answer_eight'] if question_info['answer_eight']

      question.correct_answer = question_info['correct_answer']
      question.presentation_state = 'active'

      question.save ? true : question.errors.messages
    end

    # display to teacher while question 
    def self.get_question_and_answers_by_question_id(question_id) 
      Question.find_by(id: question_id).attributes 
    end

    def self.set_active_by_question_id(question_id)
      question = Question.find_by(id: question_id)
      question.presentation_state == 'not yet presented' ? question.update(presentation_state: 'active') : "Cannot activate question; question state is: #{question.presentation_state}"
    end

    def self.set_inactive_by_question_id(question_id)
      question = Question.find_by(id: question_id)
      question.presentation_state == 'active' ? question.update(presentation_state: 'presented') : "Cannot inactivate question; question state is: #{question.presentation_state}"
    end

    # for reviewing questions with their correct answer after a lecture has finished
    def self.get_correct_answer_by_lecture_id(lecture_id)
      questions = Question.where(lecture_id: lecture_id).as_json
      questions.each do |question|
        question.delete('answer_one')
        question.delete('answer_two')
        question.delete('answer_three') if question['answer_three']
        question.delete('answer_four')  if question['answer_four']
        question.delete('answer_five') if question['answer_five']
        question.delete('answer_six') if question['answer_six']
        question.delete('answer_seven') if question['answer_seven']
        question.delete('answer_eight') if question['answer_eight']
      end
      questions
    end

    # display to students
    def self.get_active_question(lecture_id) 
      question = Question.where(presentation_state: 'active', lecture_id: lecture_id).as_json
      question.first.delete('correct_answer')
      question
    end
  end
end