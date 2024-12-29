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
  ) {}

  /**
   * Retrieves the name of the coffee.
   *
   * @returns {string} The name of the coffee.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Retrieves the volume of coffee in milliliters.
   *
   * @returns {number} The volume of coffee in milliliters.
   */
  public getVolume(): number {
    return this.volume;
  }
}
