require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/flash'

require_relative 'config/environments.rb'

# For le Mac users
set :bind, '0.0.0.0'
enable :sessions

get '/' do
  if session[:user_id]
    puts 'Got a session yo'
  end
  send_file 'public/index.html'
end

post '/signup' do

  user_info = LearningApp::UserRepo.create({
    'first_name' => params['first_name'],
    'last_name' => params['last_name'],
    'email' => params['email'],
    'password' => params['password'],
    'role' => params['role']
    })
  env["rack.session"][:user_info] = user_info
  puts "rack session info", request.session["user_info"]
  puts "rack session user role", request.session["user_info"]["role"]
  if user_info['id']
    session = {
      user_id: user_info['id'],
      first_name: user_info['first_name'],
      last_name: user_info['last_name'],
      email: user_info['email'],
      role: user_info['role']
    }.to_json
    # redirect to('/')
  else
    flash[:error] = user_info.errors.messages
    redirect to('/')
  end
end

post '/signin' do
  user_info = LearningApp::UserRepo.validate_by_email_and_password(params['email'],
    params['password'])

  # if user_info['id']
  #   flash[:error] = user_info.errors.messages
  #   redirect to('/')
  # else
  #   session = {
  #     user_id: user_info['id'],
  #     first_name: user_info['first_name'],
  #     last_name: user_info['last_name'],
  #     email: user_info['email'],
  #     role: user_info['role']
  #   }
  #   redirect to('/lectures')
  # end
  env["rack.session"][:user_info] = user_info
  if user_info['id']
    session = {
      user_id: user_info['id'],
      first_name: user_info['first_name'],
      last_name: user_info['last_name'],
      email: user_info['email'],
      role: user_info['role']
    }.to_json
    # redirect to('/')
  else
    flash[:error] = user_info.errors.messages
    # redirect to('/')
  end
end

post "/signout" do 
  session.clear
  200
end

get '/lectures' do
  if request.session["user_info"]["role"] == "student"
    LearningApp::LectureRepo.get_all_presented_lectures_questions_and_responses.to_json
  else
    LearningApp::LectureRepo.get_lecture_id_and_topic_by_user_id(session[:user_id]).to_json
  end
end

post '/lectures' do
  lecture_id = LearningApp::LectureRepo.create_by_user_id_and_topic(session[:user_id], params['topic']) if session[:role] == 'instructor'

  # redirect to('/lectures/' + lecture_id)
end

get '/lectures/:id' do
  if session[:role] == 'student'
    LearningApp::QuestionRepo.get_active_question
  else
    LearningApp::QuestionRepo.get_correct_answer_by_lecture_id(session[:lecture_id])
  end
end

post '/lectures/:id/activate' do
  LearningApp::LectureRepo.set_active_by_lecture_id(params['lecture_id'])
end

post '/lectures/:id/deactivate' do
  LearningApp::LectureRepo.set_inactive_by_lecture_id(params['lecture_id'])
end

post '/lectures/:id/questions' do
  question_info = {
    'lecture_id' => session[:lecture_id],
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
  LearningApp::QuestionRepo.create_by_lecture_id(question_info)

  redirect to('lectures/:id')
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
  LearningApp::ResponseRepo.create_response_by_user_id_and_question_id(session[:user_id], params['lecture_id'], params['question_id'], params['response'])
end