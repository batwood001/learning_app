module LearningApp
  class Lecture < ActiveRecord::Base
      belongs_to :user

      has_many :questions
  end
end