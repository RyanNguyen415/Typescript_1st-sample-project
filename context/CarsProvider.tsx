
import React, { useContext, createContext, ReactNode, useState } from 'react'
import { CarInterface } from '../interfaces/CarInterface';

const UseCarContext = createContext<CarInterface[]>([]);
const SetCarContext = createContext<any>([]);

export function useCar(){
  return useContext(UseCarContext)
}
export function setCar(){
 return useContext(SetCarContext)
}

interface Props{
  children: ReactNode
}

const CarsProvider = ({children}: Props) => {
  const [cars, setCars]= useState<CarInterface[]>([])

  function setAllCars(cars:CarInterface[]){
    setCars(cars)
  }

  return (
    <SetCarContext.Provider value = {setAllCars}>
      <UseCarContext.Provider value={cars}>{children}</UseCarContext.Provider>
    </SetCarContext.Provider>
  );
}

export default CarsProvider