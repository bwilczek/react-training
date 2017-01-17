class IntlController < ApplicationController

  def list
    messages = JSON.parse(File.read(Rails.root.join('client', 'src', 'intl', "#{params[:locale]}.json" )))
    render json: { locale: params[:locale], messages: messages }
  end

end
