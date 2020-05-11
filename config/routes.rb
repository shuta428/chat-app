Rails.application.routes.draw do
  devise_for :users

  root "groups#index"
  resources :users, only: [:edit, :update]
  resources :likes, only: [:create, :destroy]

  resources :groups, oniy: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create, :show]
  end
end