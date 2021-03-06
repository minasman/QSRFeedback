class SessionsController < ApplicationController
    before_action :require_log_in, except: [:new, :create, :welcome ,:facebook]

    def welcome
    end

    def new
        @user = User.new
    end

    def create
        @user = User.find_by(username: params[:user][:username])
        if @user.try(:authenticate, params[:user][:password])
            session[:user_id] = @user.id
            redirect_to user_path(@user)
        else
            flash.alert = "Username and/or Password Not Found"
            redirect_to signin_path
        end
    end

    def destroy
        session.delete :user_id
        redirect_to '/'
    end

end
