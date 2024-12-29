import { Ingredient } from "../models/Ingredient";

export class WaterIngredient extends Ingredient {
  constructor(private temperature: number = 100) {
    super("Water");
  }

  public getDescription(): string {
    return `Water at ${this.temperature}°C.`;
  }
}
