class UsersController < ApplicationController
    before_action :set_user, only: [:show, :edit, :update, :destroy]

    def index
        @users = User.all
    end

    def new
        @user = User.new
    end

    def create
        @user = User.create(user_params)
        if @user.save
            flash.notice = "User Successfully Added"
            redirect_to user_show_path
        else
            flash.alert = "Error Creating User"
            render :new
        end
    end

    def show
    end

    def edit
    end

    def update
    end

    def destroy
    end

    private
    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :position, :email, :password)
    end
end
