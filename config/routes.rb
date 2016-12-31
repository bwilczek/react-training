Rails.application.routes.draw do

  scope '/api' do
    post '/calculator/add', to: 'calculator#add'
    get '*unmatched_route', :to => redirect('/')
  end

  get '*unmatched_route', :to => "application#public_index"
end
