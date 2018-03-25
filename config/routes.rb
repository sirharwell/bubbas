Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users, only: :update
    resources :orders do
      resources :items
    end
  end

  get '/api/items', to: 'api/items#menu_items'
  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
