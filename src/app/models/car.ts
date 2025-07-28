import { Engine } from "./engine";

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  photo: string;
  features: string[];
  description: string;
  unitsAvailable: number;
  color: string;
  transmission: string;
  engine: Engine
}
