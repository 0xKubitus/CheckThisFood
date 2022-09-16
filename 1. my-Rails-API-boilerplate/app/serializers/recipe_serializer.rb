class RecipeSerializer
  include JSONAPI::Serializer
  attributes :title, :image_url, :description, :carbohydrates, :calories

  has_many :comments
end
