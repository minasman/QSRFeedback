class CommentUpdateSerializer < ActiveModel::Serializer
  attributes :id, :update_date, :update_time, :update_type, :employee_name, :current_update
  belongs_to :comment
end
