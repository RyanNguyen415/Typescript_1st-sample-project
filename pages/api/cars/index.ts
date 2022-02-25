//post into database.  post needs data from front end, stored in the body
import type { NextApiRequest, NextApiResponse } from "next";
import CarModel from "../../../models/CarModel";
import { pool } from "../db/connection";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { make, model, year, color, user_id } = req.body;
    const car = new CarModel(make, model, year, color, user_id);
    try {
      const data = await pool.query(
        "INSERT into cars(make, model, year, color, user_id) values ($1, $2, $3, $4, $5) RETURNING *",
        [car.make, car.model, car.year, car.color, car.user_id]
      );

      const newCar = data.rows[0];
      console.log(newCar);
      res.json(newCar);
    } catch (error) {}
  }
};
