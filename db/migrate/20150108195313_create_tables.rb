class CreateTables < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password
      t.string :role
    end

    create_table :lectures do |t|
      t.string :topic
      t.integer :user_id
      t.string :presentation_state
      t.timestamps
    end

    create_table :questions do |t|
      t.integer :lecture_id
      t.text :question
      t.string :answer_one
      t.string :answer_two
      t.string :answer_three
      t.string :answer_four
      t.string :answer_five
      t.string :answer_six
      t.string :answer_seven
      t.string :answer_eight
      t.string :correct_answer
      t.string :presentation_state
      t.timestamps
    end

    create_table :responses do |t|
      t.integer :user_id
      t.integer :question_id
      t.string :response
      t.timestamps
    end
  end
end