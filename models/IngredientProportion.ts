import { Ingredient } from "./Ingredient";

/**
 * Represents the proportion of a specific ingredient in a recipe.
 */
export class IngredientProportion {
  /**
   * Creates an instance of IngredientProportion.
   *
   * @param ingredient - The ingredient to be used.
   * @param proportion - The proportion of the ingredient from 0 to 1.
   */
  constructor(private ingredient: Ingredient, private proportion: number) {
    if (!IngredientProportion.isValidProportion(proportion)) {
      throw new Error("Proportion must be between 0 and 1.");
    }
  }

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

  /**
   * Checks if the given proportion is valid.
   * A valid proportion should be between 0 and 1, inclusive.
   *
   * @param proportion - The proportion to validate.
   * @returns `true` if the proportion is valid, `false` otherwise.
   */
  public static isValidProportion(proportion: number): boolean {
    return proportion < 0 || proportion > 1;
  }
}
