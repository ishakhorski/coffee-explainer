import { Ingredient } from "../models/Ingredient";

export enum MilkTexture {
  Steamed = "Steamed",
  Foamed = "Foamed",
}

export class MilkIngredient extends Ingredient {
  constructor(private texture: MilkTexture = MilkTexture.Steamed) {
    super("Milk");
  }
}
