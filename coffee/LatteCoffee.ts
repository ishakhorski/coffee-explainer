import { Coffee } from "../models/Coffee";
import { IngredientProportion } from "../models/IngredientProportion";

import { EspressoIngredient } from "../ingredients/EspressoIngredient";
import { MilkIngredient, MilkTexture } from "../ingredients/MilkIngredient";

export class LatteCoffee extends Coffee {
  constructor(protected volume: number) {
    const espresso = new EspressoIngredient();
    const milk = new MilkIngredient(MilkTexture.Steamed);
    const foam = new MilkIngredient(MilkTexture.Foamed);

    super(
      "Cappuccino",
      [
        new IngredientProportion(espresso, 0.3),
        new IngredientProportion(milk, 0.6),
        new IngredientProportion(foam, 0.1),
      ],
      volume
    );
  }
}
