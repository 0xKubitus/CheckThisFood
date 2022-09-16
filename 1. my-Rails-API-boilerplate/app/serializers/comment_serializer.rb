class CommentSerializer
  include JSONAPI::Serializer
  attributes :content, :recipe_id, :user_id
end
