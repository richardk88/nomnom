class Api::RestaurantsController < ApplicationController
    before_action :authenticate_user!
    
    def index
        @user = current_user
        @creatures = @owner.creatures.all
        render json: @creatures
    end

    private
    def restaurant_params
        params.require(:restaurant).permit(:name, :featuredPhoto, :address, :hours, :phoneNumber, :url, :price, :rating)
    end
end
