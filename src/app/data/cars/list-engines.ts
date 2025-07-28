import { Engine } from "../../models/engine";

export const engines: Engine[] = [
  {
    id: '1',
    type: 'Inline-4',
    horsepower: 150,
    torque: 200,
    displacement: 1.5,
    fuelType: 'Gasoline',
    configuration: 'DOHC',
    turbocharged: false,
    hybrid: false,
    electric: false
  },
  {
    id: '2',
    type: 'V6',
    horsepower: 300,
    torque: 400,
    displacement: 3.0,
    fuelType: 'Gasoline',
    configuration: 'DOHC',
    turbocharged: true,
    hybrid: false,
    electric: false
  },
  {
    id: '3',
    type: 'Electric',
    horsepower: 250,
    torque: 300,
    displacement: 0,
    fuelType: 'Electric',
    configuration: 'Single Motor',
    turbocharged: false,
    hybrid: false,
    electric: true
  },
  {
    id: '4',
    type: 'Hybrid',
    horsepower: 200,
    torque: 250,
    displacement: 2.0,
    fuelType: 'Hybrid',
    configuration: 'DOHC',
    turbocharged: false,
    hybrid: true,
    electric: false
  },
]
