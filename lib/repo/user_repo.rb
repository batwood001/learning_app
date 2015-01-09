module LearningApp
  class UserRepo
    def self.create(first_name, last_name, email, password, role)
      user = User.new
      user.first_name = first_name
      user.last_name = last_name
      user.email = email
      user.password = password
      user.role = role

      user.save ? self.get_by_user_id(user.id) : user.errors.messages
    end

    def self.validate_by_email_and_password(email, password)
      user_info = User.find_by(email: email).attributes

      user_info['password'] == password ? self.get_by_user_id(user_info['id']) : false
    end

    def self.get_by_user_id(user_id)
      user_info = User.find_by(id: user_id).attributes
      
      # Scrubbing user_info to remove harmful data per Charles Milam note: this is a very hacky way per Ser Charles
      user_info.delete('password')
      user_info
    end
  end
end