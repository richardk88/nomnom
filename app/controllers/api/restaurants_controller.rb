class Api::RestaurantsController < ApplicationController
    before_action :authenticate_user!
    
    def index
        @restaurants = current_user.favorite.restaurants.all 
        render json: @restaurants 
    end

    def show
        @restaurant = Restaurant.find params[:id]
        render json: @restaurant
    end

    def create
        @restaurant = current_user.favorite.restaurants.create(restaurant_params)
    end

    def destroy
        @restaurant = Restaurant.find params[:id]
        @restaurant.destroy
    end

    private
    def restaurant_params
        params.require(:restaurant).permit(:featuredPhoto, :venue_id, :name)
    end
end
