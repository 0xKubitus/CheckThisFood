class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :description
      t.integer :carbohydrates
      t.integer :calories
      t.integer :user_id

      t.timestamps
    end
  end
end
