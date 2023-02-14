import React from "react";

export default function Support() {
  return(
    <section className="flex bg-sky-200 items-center">
      <div className="p-5 mx-20">
        <img 
          src="https://culturaenegocios.com.br/wp-content/uploads/2022/05/familia-pais-dois-filhos-viajando-carro.jpg"
          alt="Plano de assistencia"
          className="h-3/6 rounded-xl border-4 border-sky-700"
        />
      </div>
      <div className="w-3/6 p-5 mx-20 flex flex-col gap-5">
        <p className="text-center font-bold text-2xl text-black border-b-2">Assistência</p>
        <p className="text-slate-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </section>
  )
}