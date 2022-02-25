import { CarInterface } from "../interfaces/CarInterface";

export default class CarModel implements CarInterface {
  id?: number;
  make: string;
  model: string;
  year: string;
  color: string;
  user_id?: number;

  constructor(
    make: string,
    model: string,
    year: string,
    color: string,
    user_id?: number
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.user_id = user_id;
  }
}
