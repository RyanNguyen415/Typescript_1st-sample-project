import React from 'react'
import { useCar } from '../context/CarsProvider'
import { CarInterface } from '../interfaces/CarInterface'
import Car from './Car'

const Cars = () => {
const allCars = useCar()

  return (
    <div>
      {allCars.map((car)=>(
        <Car key={car.id} car={car}/>
      ))}

    </div>
  )
}

export default Cars