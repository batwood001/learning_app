module LearningApp
  class LectureRepo
    def self.get_lecture_id_and_topic_by_user_id(user_id)
      Lecture.find_by(user_id)
    end

    def self.set_active_by_lecture_id(lecture_id)
    end

    def self.set_inactive_by_lecture_id(lecture_id)
    end

    def self.create_by_user_id(user_id)
    end
  end
end