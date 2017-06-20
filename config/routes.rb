Rails.application.routes.draw do
  get 'code_examples/index'

  root 'code_examples#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
