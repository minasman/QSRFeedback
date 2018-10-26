class StoreController < ApplicationController
    before_action :set_store, only: [:show, :edit, :update, :destroy]

    def index
        @stores = Store.all
    end

    def new
        @store = Store.new
    end

    def create
        @store = Store.create(store_params)
        if @store.save
            flash.notice = "Store Successfully Added"
            redirect_to store_show_path
        else
            flash.alert = "Error Creating Store"
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
    def set_store
        @store = Store.find(params[:id])
    end

    def store_params
        params.require('store').permit(:)
    end
end
