module LearningApp
  class User < ActiveRecord::Base
    has_many :lectures
    has_many :responses

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates_format_of :email, with: /@/, message: "must be valid"
    validates :password, presence: true
    validates :password, length: { minimum: 4 }
    validates_format_of :password, with: /[a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+/, message: "must contain letter and number"
    validates :role, presence: true
    validates_format_of :role, with: /student|instructor/
  end
end