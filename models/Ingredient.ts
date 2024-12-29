/**
 * Abstract class representing an Ingredient.
 *
 * @abstract
 */
export abstract class Ingredient {
  /**
   * Creates an instance of the Ingredient class.
   *
   * @param name - The name of the ingredient.
   */
  constructor(protected name: string) {}

  /**
   * Retrieves the name of the ingredient.
   *
   * @returns {string} The name of the ingredient.
   */
  public getName(): string {
    return this.name;
  }
}
