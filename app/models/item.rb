class Item < ApplicationRecord
  belongs_to :order, optional: true

  def self.set_menu
    Item.find_by_sql('
      SELECT items.name, items.price, items.id, items.order_id
      FROM items
    ')
  end
end
