class ApplicationController < ActionController::API
  def index_html
    render html: File.read(Rails.root.join('public', 'index.html')).html_safe
  end

  def index_js
    render js: File.read(Rails.root.join('public', 'index.min.js'))
  end
end
