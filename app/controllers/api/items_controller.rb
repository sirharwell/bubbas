class Api::ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_item, only: [:show]
  
  def index
    render json: Item.all
  end

  def menu_items
    # render json: Item.all
    render json: Item.set_menu

  end

  private 

    def item_params
      params.require(:item).permit(:name, :price)
    end
end
