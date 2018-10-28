Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'sessions#welcome'
  resources :comments do
    resources :comment_updates, only: [:new, :create, :index]
  end
  resources :stores
  resources :users
  get '/signin' => 'sessions#new'
  post '/signin' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get '/signup' => 'users#new'
  get '/open' => 'comments#open'
  get '/closed' => 'comments#closed'
  get '/position' => 'users#position'
end
