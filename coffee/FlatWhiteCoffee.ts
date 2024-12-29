import { Coffee } from "../models/Coffee";
import { IngredientProportion } from "../models/IngredientProportion";

import { EspressoIngredient } from "../ingredients/EspressoIngredient";
import { MilkIngredient, MilkTexture } from "../ingredients/MilkIngredient";

export class FlatWhiteCoffee extends Coffee {
  constructor(protected volume: number) {
    const espresso = new EspressoIngredient();
    const milk = new MilkIngredient(MilkTexture.Steamed);

    super(
      "Flat White",
      [
        new IngredientProportion(espresso, 1 / 3),
        new IngredientProportion(milk, 2 / 3),
      ],
      volume
    );
  }
}
