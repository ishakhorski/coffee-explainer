import { Coffee } from "../models/Coffee";
import { IngredientProportion } from "../models/IngredientProportion";

import { EspressoIngredient } from "../ingredients/EspressoIngredient";
import { WaterIngredient } from "../ingredients/WaterIngredient";

export class AmericanoCoffee extends Coffee {
  constructor(protected volume: number) {
    const espresso = new EspressoIngredient();
    const water = new WaterIngredient();

    super(
      "Americano",
      [
        new IngredientProportion(espresso, 1 / 3),
        new IngredientProportion(water, 2 / 3),
      ],
      volume
    );
  }
}
