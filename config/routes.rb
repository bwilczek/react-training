Rails.application.routes.draw do

  scope '/api' do
    post '/calculator/add', to: 'calculator#add'
    post '/briefing/all', to: 'briefing#all'
    # get '*unmatched_route', :to => redirect('/')
  end

  get '/*path/index.min.js', :to => "application#index_js"
  get '*unmatched_route', :to => "application#index_html"
end
