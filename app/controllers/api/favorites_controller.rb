class Api::FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
        @user = User.find(current_user.id)
        @favorites = @user.favorites
        render json: @favorites
    end

    def show
        @favorites = Favorite.find params[:id]
        @restaurant = @favorites.restaurants
        render json: @restaurants
    end 

    def create
        userId = User.find(current_user.id)
        restaurantId = Restaurant.find params[:restaurant_id]
        @favorite = Favorite.create!(userId: userId, restaurantId: restaurantId)
    end

    def destroy
        @favorite = Favorite.find params[:id]
        @favorite.destroy
    end
end
