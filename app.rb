require 'sinatra'

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

get '/fixtures' do
    erb :fixtures
end

get '/fixtures-201819' do
    erb :fixtures201819
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