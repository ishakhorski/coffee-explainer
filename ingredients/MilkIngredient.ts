import { Ingredient } from "../models/Ingredient";

export enum MilkTexture {
  Steamed = "steamed",
  Foamed = "foamed",
}

export class MilkIngredient extends Ingredient {
  constructor(private texture: MilkTexture = MilkTexture.Steamed) {
    super("Milk");
  }

  public getDescription(): string {
    return `Milk with ${this.texture} texture.`;
  }
}
