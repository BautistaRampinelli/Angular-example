export interface Engine {
  id: string;
  type: string;
  horsepower: number;
  torque: number;
  displacement: number;
  fuelType: string;
  configuration: string;
  turbocharged: boolean;
  hybrid: boolean;
  electric: boolean;
}
