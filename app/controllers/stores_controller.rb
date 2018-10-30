class StoresController < ApplicationController
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
            redirect_to store_path(@store)
        else
            flash.alert = "Error Creating Store"
            render :new
        end
    end

    def show
        respond_to do |format|
            format.html { render :show }
            format.json { render json: @store }
        end
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
        params.require('store').permit(:name, :store_number, :store_email, :street_address, :city, :state, :zip_code, :phone)
    end
end
