import React from 'react'
import { CarInterface } from '../interfaces/CarInterface'

interface Props{
  car: CarInterface
}


const Car = ({car}:Props) => {
  return (
    <div>
      {car.make} {car.model} {car.color} {car.year}
    </div>
  )
}

export default Car