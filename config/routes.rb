Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :favorites
    resources :restaurants
    resources :users
  end
end
