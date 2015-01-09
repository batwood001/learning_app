module LearningApp
  class Question < ActiveRecord::Base
    belongs_to :lecture

    has_many :responses

    validates :question, presence: true
    validates :answer_one, presence: true
    validates :answer_two, presence: true
    validates :correct_answer, presence: true
  end
end