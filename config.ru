require './app'

run Sinatra::Application

#Environment variables

$smtp_address = ENV['SMTP_ADDRESS']
$smtp_port = ENV['SMTP_PORT']
$smtp_username = ENV['SMTP_USER_NAME']
$smtp_password = ENV['SMTP_PASSWORD']