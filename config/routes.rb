Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'
  

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create] do
      resources :chatrooms, only: [:index]
    end
    resources :chatrooms, only: [:create, :show, :update, :destroy] do
      resources :messages, only: [:index]
    end
    resources :chatroom_subscriptions, only: [:show, :create, :update, :destroy]
    resources :messages, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end


  get '/demo/:id' => 'api/messages#demo'
  mount ActionCable.server => '/cable'


  # get '*path', to: redirect('/'), via: :all
  
end
