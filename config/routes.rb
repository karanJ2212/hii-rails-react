Rails.application.routes.draw do
  root "greetings#hello"
  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end
end