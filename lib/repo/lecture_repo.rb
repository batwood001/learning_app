module LearningApp
  class LectureRepo
    def self.create_by_user_id_and_topic(user_id, topic)
      lecture = Lecture.new
      lecture.user_id = user_id
      lecture.topic = topic
      lecture.presentation_state = 'not yet presented'

      lecture.save ? true : false
    end

    def self.get_lecture_id_and_topic_by_user_id(user_id)
      Lecture.find_by(id: user_id).attributes
    end

    def self.set_active_by_lecture_id(lecture_id)
      lecture = Lecture.find_by(id: lecture_id)
      lecture.presentation_state == 'not yet presented' ? lecture.update(presentation_state: 'active') : "Lecture already started."
    end

    def self.set_inactive_by_lecture_id(lecture_id)
      lecture = Lecture.find_by(id: lecture_id)
      lecture.presentation_state == 'active' ? lecture.update(presentation_state: 'presented') : "Lecture already ended."
    end
  end
end