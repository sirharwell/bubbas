class Api::OrdersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_order, only: [:show, :update]
  
  def index
    Order.all
  end

  def show
    render json: @order
  end

  def create
    order = current_user.orders.create(order_params)
    if order.save
      render json: order
    else
      render json: { errors: order.errors.full_messages.join(',') }, status: 422
    end
  end

  private 
  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit()
  end
end