class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :store_number, :store_email, :street_address, :city, :state, :zip_code, :phone, :gm_id
end
