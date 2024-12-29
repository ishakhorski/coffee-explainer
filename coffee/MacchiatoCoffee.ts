import { Coffee } from "../models/Coffee";
import { IngredientProportion } from "../models/IngredientProportion";

import { EspressoIngredient } from "../ingredients/EspressoIngredient";
import { MilkIngredient, MilkTexture } from "../ingredients/MilkIngredient";

export class MacchiatoCoffee extends Coffee {
  constructor(protected volume: number) {
    const espresso = new EspressoIngredient();
    const milk = new MilkIngredient(MilkTexture.Foamed);

    super(
      "Macchiato",
      [
        new IngredientProportion(espresso, 0.9),
        new IngredientProportion(milk, 0.1),
      ],
      volume
    );
  }
}
