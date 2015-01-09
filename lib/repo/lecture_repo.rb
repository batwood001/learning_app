module LearningApp
  class LectureRepo
    def self.create_by_user_id_and_topic(user_id, topic)
      lecture = Lecture.new
      lecture.user_id = user_id
      lecture.topic = topic
      lecture.active = false

      lecture.save ? true : false
    end

    def self.get_lecture_id_and_topic_by_user_id(user_id)
      Lecture.find_by(id: user_id)
    end

    def self.set_active_by_lecture_id(lecture_id)
      lecture = Lecture.where("id = #{lecture_id}").attributes
      !lecture.active ? lecture.update(active: true) : "Lecture already started."
    end

    def self.set_inactive_by_lecture_id(lecture_id)
      lecture = Lecture.where("id = #{lecture_id}").attributes
      !lecture.active ? lecture.update(active: false) : "Lecture already ended."
    end
  end
end