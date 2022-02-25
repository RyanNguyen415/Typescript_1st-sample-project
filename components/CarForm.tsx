import { useRouter } from "next/router";
import React, { useRef } from "react";
import CarModel from "../models/CarModel";

const CarForm = () => {
  const makeRef = useRef<HTMLInputElement>(null);
  const modelRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const userIdRef = useRef<HTMLInputElement>(null);
  
  const router = useRouter();

  async function submitForm(e: any) {
    e.preventDefault();
    //! says i know it wont be null, since you had to set it to null to begin with
    try {
      const car = new CarModel(
        makeRef.current!.value,
        modelRef.current!.value,
        yearRef.current!.value,
        colorRef.current!.value,
        parseInt(userIdRef.current!.value)
      );

      const response = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(car),
      });
      const newCar = await response.json();
      router.reload();
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={makeRef} type="text" placeholder="make" />
        <input ref={modelRef} type="text" placeholder="model" />
        <input ref={yearRef} type="text" placeholder="year" />
        <input ref={colorRef} type="text" placeholder="color" />
        <input ref={userIdRef} type="number" placeholder="user_id" />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CarForm;
