class CalculatorController < ApplicationController
  def add
    render json: { result: params[:operand1].to_i + params[:operand2].to_i }
  end
end
