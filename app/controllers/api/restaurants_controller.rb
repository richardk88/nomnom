class Api::RestaurantsController < ApplicationController
    before_action :authenticate_user!
    
    def show
        @restaurant = Restaurant.find params[:id]
        render json: @restaurant
    end

    def create
        @favorite_list = Favorites.find params[:id]
        @favorite_list.restaurant.create(restaurant_params)
    end

    def destroy
        @restaurant = Restaurant.find params[:id]
        @restaurant.destroy
    end

    private
    def restaurant_params
        params.require(:restaurant).permit(:name, :featuredPhoto, :address, :hours, :phoneNumber, :url, :price, :rating)
    end
end
