import React, { useState, useEffect } from "react";
import rastreamento from "../assets/rastreamento.png";
import smartlink from "../assets/rastreamento.png";
import totalProtecao from "../assets/totalProtecao.png";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [ rastreamento, smartlink, totalProtecao ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevState) => (prevState + 1) % images.length);
    }, 3000)

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div 
      className="w-full h-3/6 bg-gradient-to-b from-sky-900 to-sky-200 flex justify-center items-center"
    >
      <img 
        src={images[index]} 
        alt="Imagens de casas"
        className="w-2/6 h-96 rounded-2xl border-4 border-sky-700 my-10"
      />
    </div>
  )
}