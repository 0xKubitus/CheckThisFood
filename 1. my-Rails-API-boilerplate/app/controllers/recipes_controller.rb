class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[ show update destroy ]

  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: RecipeSerializer.new(@recipes, options).serializable_hash.to_json
  end

  # GET /recipes/1
  def show
    recipe = Recipe.find(params[:id])
    render json: RecipeSerializer.new(recipe, options).serializable_hash.to_json
  end

  # POST /recipes
  def create
    @recipe = RecipeSerializer.new(recipe_params).serializable_hash.to_json

    if @recipe.save
      render json: @recipe, status: :created, location: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def recipe_params
      params.require(:recipe).permit(:title, :description, :carbohydrates, :calories, :user_id, :image_url)
    end

    def options
      @options ||= {include: %i[comments]}
      
    end
end
