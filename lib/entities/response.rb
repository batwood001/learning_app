module LearningApp
  class Response < ActiveRecord::Base
    belongs_to :user
    belongs_to :question
    belongs_to :lectures
  end
end