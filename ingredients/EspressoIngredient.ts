import { Ingredient } from "../models/Ingredient";

export class EspressoIngredient extends Ingredient {
  constructor() {
    super("Espresso");
  }

  public getDescription(): string {
    return "A strong coffee brewed by forcing steam through finely-ground coffee beans.";
  }
}
