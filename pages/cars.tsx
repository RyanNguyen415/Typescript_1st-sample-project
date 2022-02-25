import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import CarForm from '../components/CarForm'
import Cars from '../components/Cars'
import { setCar } from '../context/CarsProvider'
import { CarInterface } from '../interfaces/CarInterface'
import { pool } from './api/db/connection'

interface Props{
    carss: CarInterface []
}

const cars = ({carss}: Props) => {

const setAllCar = setCar();

useEffect(()=>{
  setAllCar(carss)
},[])

const [form, setForm] = useState(false)

function toggleAddCar(){
  setForm(!form)
}

  return (
    <div>
      <Cars/>
      {form?<CarForm/>:''}
      <button onClick={toggleAddCar}>Add Car</button>
    </div>
  )
}

export default cars

export const getStaticProps: GetStaticProps = async() =>{
    let carss = [];
try {
    carss = await pool.query('SELECT * FROM cars')
   
} catch (error: any) {
    console.log(error.message)
}
 return {
   props: { carss: carss.rows },
 };
}