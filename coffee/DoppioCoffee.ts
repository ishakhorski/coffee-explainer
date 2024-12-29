import { Coffee } from "../models/Coffee";
import { IngredientProportion } from "../models/IngredientProportion";

import { EspressoIngredient } from "../ingredients/EspressoIngredient";

export class DoppioCoffee extends Coffee {
  constructor(protected volume: number) {
    const espresso = new EspressoIngredient();

    super(
      "Doppio",
      [
        new IngredientProportion(espresso, 0.5),
        new IngredientProportion(espresso, 0.5),
      ],
      volume
    );
  }
}
