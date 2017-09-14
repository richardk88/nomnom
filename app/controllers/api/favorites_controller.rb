class Api::FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
        # @user = current_user
        # @favorites = @user.favorites
        # render json: @favorites
    end

    def show
        # @favorites = Favorite.find params[:id]
        # @restaurant = @favorites.restaurants
        # render json: @restaurants
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
