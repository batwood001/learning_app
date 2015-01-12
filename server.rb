require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/flash'

require_relative 'config/environments.rb'

# For le Mac users
set :bind, '0.0.0.0'
enable :sessions

get '/' do
  # if request.session['user_info']['id']
  #   puts 'Got a session yo'
  # end
  send_file 'public/index.html'
end

post '/signup' do
  # build user info from form params
  user_info = LearningApp::UserRepo.create({
    'first_name' => params['first_name'],
    'last_name' => params['last_name'],
    'email' => params['email'],
    'password' => params['password'],
    'role' => params['role']
    })

  if user_info['id']
    # assign user info to rack session Charles N. Charge
    env["rack.session"][:user_info] = user_info
    session["user_info"].to_json
  else
    flash[:error] = user_info.errors.messages
    redirect to('/')
  end
end

post '/signin' do
  user_info = LearningApp::UserRepo.validate_by_email_and_password(params['email'],
    params['password'])

  if user_info['id']
    env["rack.session"][:user_info] = user_info
    session["user_info"].to_json
  else
    flash[:error] = user_info.errors.messages
  end
end

post "/signout" do 
  session.clear
  redirect to('/')
end

get '/lectures' do
  # if request.session["user_info"]["role"] == "student"
    # LearningApp::LectureRepo.get_all_presented_lectures_questions_and_responses.to_json
  # else
    # LearningApp::LectureRepo.get_lecture_id_and_topic_by_user_id(request.session['user_info']['id']).to_json
    LearningApp::LectureRepo.get_lecture_id_and_topic_by_user_id(1).to_json

  # end
end

post '/lectures' do
  LearningApp::LectureRepo.create_by_user_id_and_topic(request.session['user_info']['id'], params['topic']).to_json if request.session['user_info']['role'] == 'instructor'
end

get '/lectures/:id' do
  # if request.session["user_info"]["role"] == "student"
    LearningApp::QuestionRepo.get_active_question(params['id']).to_json
  # else
    # LearningApp::QuestionRepo.get_correct_answer_by_lecture_id(1).to_json
  # end
end

get '/lectures/:id/questions' do
  # if request.session["user_info"]["role"] == "student"
    LearningApp::QuestionRepo.get_active_question(params['id']).to_json
  # else
    # LearningApp::QuestionRepo.get_correct_answer_by_lecture_id(1).to_json
  # end
end

post '/lectures/:id/activate' do
  LearningApp::LectureRepo.set_active_by_lecture_id(params['lecture_id'])
end

post '/lectures/:id/deactivate' do
  LearningApp::LectureRepo.set_inactive_by_lecture_id(params['lecture_id'])
end

post '/lectures/questions' do
  question_info = {
    'lecture_id' => params['lecture_id'],
    'question' => params['question'],
    'answer_one' => params['answer_one'],
    'answer_two' => params['answer_two'],
    'answer_three' => params['answer_three'],
    'answer_four' => params['answer_four'],
    'answer_five' => params['answer_five'],
    'answer_six' => params['answer_six'],
    'answer_seven' => params['answer_seven'],
    'answer_eight' => params['answer_eight'],
    'correct_answer' => params['correct_answer'],
  }
  LearningApp::QuestionRepo.create_by_lecture_id(question_info).to_json

  # redirect to('lectures/:id')
end

get '/lectures/:lecture_id/questions/:id' do
  LearningApp::QuestionRepo.get_question_and_answer_by_question_id(params['question_id'])
end

post '/lectures/:lecture_id/questions/:id/activate' do
  LearningApp::QuestionRepo.set_active_by_question_id(params['question_id'])
end

post '/lectures/:lecture_id/questions/:id/deactivate' do
  LearningApp::QuestionRepo.set_inactive_by_question_id(params['question_id'])
end

post '/lectures/:lecture_id/questions/:question_id/response' do
  LearningApp::ResponseRepo.create_response_by_user_id_and_question_id(request.session['user_info']['id'], params['lecture_id'], params['question_id'], params['response'])
end

post '/lectures/response' do
  LearningApp::ResponseRepo.create_response_by_user_id_and_question_id(request.session['user_info']['id'], params['lecture_id'], params['question_id'], params['response'])
end

after do
  ActiveRecord::Base.connection.close
end