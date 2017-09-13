class Api::FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
        @favorites = Favorite.all
        render json: @favorites 
    end

    def create
        user_id = params[:user_id]
        venue_id = params[:venue_id]
        @favorite = Favorite.create!(user_id: user_id, venue_id: venue_id)
    end

    def destroy
    end
end
