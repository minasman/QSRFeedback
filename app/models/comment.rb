class Comment < ApplicationRecord
    belongs_to :store
    belongs_to :guest
end
