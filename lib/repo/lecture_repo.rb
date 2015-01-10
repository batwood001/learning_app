module LearningApp
  class LectureRepo
    def self.create_by_user_id_and_topic(user_id, topic)
      lecture = Lecture.new
      lecture.user_id = user_id
      lecture.topic = topic
      lecture.presentation_state = 'not yet presented'

      lecture.save ? lecture.id : false
    end

    # For the lecture landing page: displays all questions and their answers per lecture topic
    def self.get_all_presented_lectures_questions_and_responses
      Lecture.joins(:questions).where("lectures.presentation_state = 'presented'")
      .joins(:responses).as_json
    end

    def self.get_lecture_id_and_topic_by_user_id(user_id)
      Lecture.find_by(id: user_id).attributes
    end

    def self.set_active_by_lecture_id(lecture_id)
      lecture = Lecture.find_by(id: lecture_id)
      lecture.presentation_state == 'not yet presented' ? lecture.update(presentation_state: 'active') : "Cannot activate lecture; lecture state is: #{lecture.presentation_state}"
    end

    def self.set_inactive_by_lecture_id(lecture_id)
      lecture = Lecture.find_by(id: lecture_id)
      lecture.presentation_state == 'active' ? lecture.update(presentation_state: 'presented') : "Cannot inactivate lecture; lecture state is: #{lecture.presentation_state}"
    end
  end
end