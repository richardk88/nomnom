class Api::FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
        @favorites = Favorite.all
        render json: @favorites 
    end

    def create
        
    end

    def destroy
    end
end
