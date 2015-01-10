module LearningApp
  class ResponseRepo
    def self.find_by_question_id(question_id)
      Response.find_by(question_id: question_id).attributes
    end

    def self.find_by_user_id(user_id)
      Response.find_by(user_id: user_id).attributes
    end

    def self.create_response_by_user_id_and_question_id(user_id, lecture_id, question_id, response_text)
      response = Response.new
      response.user_id = user_id
      response.lecture_id = lecture_id
      response.question_id = question_id
      response.response = response_text

      response.save ? true : response.errors.messages
    end
  end
end