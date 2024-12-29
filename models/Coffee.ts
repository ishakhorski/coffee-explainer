import { IngredientProportion } from "./IngredientProportion";

/**
 * Abstract class representing a Coffee.
 *
 * @abstract
 */
export abstract class Coffee {
  /**
   * Creates an instance of Coffee.
   *
   * @param name - The name of the coffee.
   * @param ingredients - The list of ingredients and their proportions.
   * @param volume - The volume of coffee in milliliters.
   */
  constructor(
    protected name: string,
    protected ingredients: IngredientProportion[],
    protected volume: number
  ) {
    if (!Coffee.isValidProportions(ingredients)) {
      throw new Error("Ingredients proportions must sum up to 1.");
    }
  }

  /**
   * Retrieves the name of the coffee.
   *
   * @returns {string} The name of the coffee.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Retrieves the list of ingredients and their proportions.
   *
   * @returns {IngredientProportion[]} The list of ingredients and their proportions.
   */
  public getIngredients(): IngredientProportion[] {
    return this.ingredients;
  }

  /**
   * Retrieves the volume of coffee in milliliters.
   *
   * @returns {number} The volume of coffee in milliliters.
   */
  public getVolume(): number {
    return this.volume;
  }

  /**
   * Checks if the proportions of the ingredients are valid.
   *
   * This method ensures that the sum of the proportions of all ingredients
   * equals 1, indicating that the proportions are correctly distributed.
   *
   * @returns {boolean} True if the sum of the proportions is 1, otherwise false.
   */
  public static isValidProportions(
    ingredients: IngredientProportion[]
  ): boolean {
    return (
      ingredients.reduce(
        (acc, ingredient) => acc + ingredient.getProportion(),
        0
      ) === 1
    );
  }
}
