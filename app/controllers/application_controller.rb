class ApplicationController < ActionController::API
  def public_index
    render html: File.read(Rails.root.join('public', 'index.html')).html_safe
  end
end
