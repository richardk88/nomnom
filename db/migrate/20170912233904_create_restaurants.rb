class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :featuredPhoto
      t.string :address
      t.string :hours
      t.string :phone
      t.string :url
      t.string :price
      t.string :rating
      t.string :menu
      t.string :venue_id
      t.references :favorite, foreign_key: true

      t.timestamps
    end
  end
end
