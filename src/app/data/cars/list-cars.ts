import { Car } from './../../models/car';
import { Engine } from '../../models/engine';

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 20000,
    photo: 'https://example.com/toyota-corolla.jpg',
    features: ['Air Conditioning', 'Navigation System', 'Bluetooth'],
    description: 'A reliable and fuel-efficient compact car.',
    unitsAvailable: 10,
    color: 'Blue',
    transmission: 'Automatic',
    engine: {
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
    }
  },
  {
    id: '2',
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 35000,
    photo: 'https://example.com/ford-mustang.jpg',
    features: ['Leather Seats', 'Premium Sound System', 'Rear Camera'],
    description: 'A powerful sports car with a classic design.',
    unitsAvailable: 5,
    color: 'Red',
    transmission: 'Manual',
    engine: {
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
    }
  },
  {
    id: '3',
    brand: 'Tesla',
    model: 'Model S',
    year: 2022,
    price: 80000,
    photo: 'https://example.com/tesla-model-s.jpg',
    features: ['Autopilot', 'Long Range Battery', 'Touchscreen Display'],
    description: 'An all-electric luxury sedan with advanced technology.',
    unitsAvailable: 8,
    color: 'White',
    transmission: 'Automatic',
    engine: {
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
    }
  },
  {
    id: '4',
    brand: 'Honda',
    model: 'Accord Hybrid',
    year: 2021,
    price: 28000,
    photo: 'https://example.com/honda-accord-hybrid.jpg',
    features: ['Hybrid Engine', 'Lane Assist', 'Adaptive Cruise Control'],
    description: 'A spacious and efficient hybrid sedan.',
    unitsAvailable: 7,
    color: 'Silver',
    transmission: 'Automatic',
    engine: {
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
    }
  },
  {
    id: '5',
    brand: 'Chevrolet',
    model: 'Silverado',
    year: 2020,
    price: 40000,
    photo: 'https://example.com/chevrolet-silverado.jpg',
    features: ['4WD', 'Towing Package', 'Touchscreen Navigation'],
    description: 'A rugged and capable full-size pickup truck.',
    unitsAvailable: 6,
    color: 'Black',
    transmission: 'Automatic',
    engine: {
      id: '5',
      type: 'V8',
      horsepower: 400,
      torque: 450,
      displacement: 5.3,
      fuelType: 'Gasoline',
      configuration: 'OHV',
      turbocharged: false,
      hybrid: false,
      electric: false
    }
  }
]
