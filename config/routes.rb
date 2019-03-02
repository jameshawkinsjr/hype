Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :chatrooms, only: [:index, :create, :show, :update, :destroy] do
      resources :messages, only: [:index]
    end
    resources :messages, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  mount ActionCable.server => '/cable'


  get '*path', to: redirect('/'), via: :all
  
end
