class CommentSerializer < ActiveModel::Serializer
  attributes :id, :visit_date, :visit_time, :comment_type, :source, :urgent, :case_number, :first_issue, :first_issue_comment
  has_many :comment_updates
end
