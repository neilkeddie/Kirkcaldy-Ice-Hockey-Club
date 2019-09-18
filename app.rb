require 'sinatra'
require 'pony'

get '/' do
    erb :index, :layout => :indexLayout
end

get '/home' do
    erb :home
end

get '/about' do
    erb :about
end

get '/awards' do
    erb :awards
end

get '/committee' do
    erb :committee
end

get '/enquiry' do
    erb :enquiry
end

post '/enquiry' do
    Pony.mail({
        :from => params[:email],
        :to => 'info@kihc.org.uk',
        :subject => params[:name] + " has contacted you via the Website",
        :body => params[:message],
        :via => :smtp,
        :via_options => {
         :address              => $smtp_address,
         :port                 => $smtp_port,
         :enable_starttls_auto => true,
         :user_name            => $smtp_username,
         :password             => $smtp_password,
         :authentication       => :plain,
         :domain               => "localhost.localdomain"
         }
        })
        erb :enquiry_submitted
end

get '/fixtures' do
    erb :fixtures, :layout => :fixturesLayout
end

get '/fixtures-201819' do
    erb :fixtures201819, :layout => :fixturesLayout
end

get '/hockeyuk' do
    erb :hockeyuk
end

get '/members' do
    erb :members
end

get '/social' do
    erb :social
end

get '/sponsors' do
    erb :sponsors
end

get '/where' do
    erb :where
end

get '/chiefs' do
    erb :'teams/chiefs'
end

get '/eagles' do
    erb :'teams/eagles'
end

get '/falcons' do
    erb :'teams/falcons'
end

get '/flames' do
    erb :'teams/flames'
end

get '/kestrels' do
    erb :'teams/kestrels'
end

get '/kubz' do
    erb :'teams/kubz'
end

get '/redskins' do
    erb :'teams/redskins'
end