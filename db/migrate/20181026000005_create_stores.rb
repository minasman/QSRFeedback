class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :store_number
      t.string :store_email
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :phone
      t.timestamps
    end
  end
end
