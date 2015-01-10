module LearningApp
  class Lecture < ActiveRecord::Base
      belongs_to :user

      has_many :questions
      has_many :responses

      validates_format_of :presentation_state, with: /not yet presented|active|presented/, message: "presentation_state must be not yet presented, active, or presented"
  end
end