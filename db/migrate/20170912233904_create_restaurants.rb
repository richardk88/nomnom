class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :featuredPhoto
      t.string :venue_id
      t.references :favorite, foreign_key: true

      t.timestamps
    end
  end
end
