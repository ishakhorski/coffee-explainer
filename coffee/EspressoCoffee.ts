import { Coffee } from "../models/Coffee";
import { IngredientProportion } from "../models/IngredientProportion";

import { EspressoIngredient } from "../ingredients/EspressoIngredient";

export class EspressoCoffee extends Coffee {
  constructor(protected volume: number) {
    const espresso = new EspressoIngredient();

    super("Espresso", [new IngredientProportion(espresso, 1)], volume);
  }
}
