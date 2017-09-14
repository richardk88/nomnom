class Api::FavoritesController < ApplicationController
    # before_action :authenticate_user!

    def index
        # @user = User.find_by params[:id]
        # @favorite = @user.favorite.restaurants
        # render json: @favorite
    end

    def show
        # @favorite = Favorite.find params[:id]
        # @restaurant = @favorite.restaurants
        # render json: @restaurant
    end 

    def create
        @user = current_user
        @user.favorite = Favorite.create()
       
    end

    def destroy
        # @favorite = Favorite.find params[:id]
        # @favorite.destroy
    end
end
