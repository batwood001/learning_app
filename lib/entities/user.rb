module LearningApp
  class User < ActiveRecord::Base
    has_many :lectures
    has_many :responses

    validates :first_name, presence => true
    validates :first_name, length: { in 4..12 }
    validates :last_name, presence => true
    validates :last_name, length: { in 4..12 }
    validates :email, presence => true
    validates_format_of :email, with: /@/, message: "must be valid"
    validates :password, presence => true
    validates_format_of :password, with: /[a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+/, message: "must contain letter and number"
    validates :role, presence => true

    add_index :email, unique: true
  end
end