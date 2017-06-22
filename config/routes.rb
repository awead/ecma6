Rails.application.routes.draw do
  get 'external_data/index'
  get 'code_examples/index'

  root 'code_examples#index'
end
