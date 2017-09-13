class Api::FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
        @user = User.find(current_user.id)
        @favoriteList = @user.favorites
        render json: @favoriteList
    end

    def show
        @favoriteList = Favorite.find params[:id]
        @restaurant = @favoriteList.restaurants
        render json: {
            favoriteList: @favoriteList,
            restaurant: @restaurants
        }
    end 

    def create
        @user = User.find(current_user.id)
        @user.favoriteList.create!( favoriteList_params)
    end

    def update
        @favoriteList = Favorite.find params[:id]
        @favoriteList.update!(favoriteList_params)
    end

    def destroy
        @favoriteList = Favorite.find params[:id]
        @favoriteList.destroy
    end

    private
    def favoriteList_params
        params.require(:favoriteList).permit(:user_id)
    end
end
