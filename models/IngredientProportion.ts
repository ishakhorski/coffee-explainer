import { Ingredient } from "./Ingredient";

/**
 * Represents the proportion of a specific ingredient in a recipe.
 */
export class IngredientProportion {
  /**
   * Creates an instance of IngredientProportion.
   *
   * @param ingredient - The ingredient to be used.
   * @param proportion - The proportion of the ingredient.
   */
  constructor(private ingredient: Ingredient, private proportion: number) {}

  /**
   * Retrieves the ingredient associated with this proportion.
   *
   * @returns {Ingredient} The ingredient object.
   */
  public getIngredient(): Ingredient {
    return this.ingredient;
  }

  /**
   * Retrieves the proportion of the ingredient.
   *
   * @returns {number} The proportion of the ingredient.
   */
  public getProportion(): number {
    return this.proportion;
  }
}
