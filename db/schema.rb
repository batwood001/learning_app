# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150108195313) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lectures", force: true do |t|
    t.string   "topic"
    t.integer  "user_id"
    t.string   "passphrase"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "questions", force: true do |t|
    t.integer  "lecture_id"
    t.text     "question"
    t.string   "answer_one"
    t.string   "answer_two"
    t.string   "answer_three"
    t.string   "answer_four"
    t.string   "answer_five"
    t.string   "answer_six"
    t.string   "answer_seven"
    t.string   "answer_eight"
    t.string   "correct_answer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "responses", force: true do |t|
    t.integer  "user_id"
    t.integer  "question_id"
    t.string   "response"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.string "role"
  end

end
