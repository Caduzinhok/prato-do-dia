"use client"
import { Search } from 'lucide-react'
import { FormEvent, use, useState } from "react";
import { receitas } from "./data/recipe";

export default function Home() {
  const [inputSearch, setInputSearch] = useState("")
  const [isSearchingRecipe, setIsSearchRecipe] = useState(true)

  function handleSubmit(event: FormEvent) {
    event?.preventDefault()
    setInputSearch('')
    setIsSearchRecipe(true)
  }
  return (
    <div className="max-w-screen w-screen max-h-screen h-screen grid grid-flow-row grid-rows-3 md:grid-flow-col md:grid-cols-2 md:grid-rows-1">

      <img src="/background-logo.jpg" alt="Background Plate Logo" className="w-full h-full" />

      <div className="flex flex-col bg-slate-100 pt-10 px-2 md:pt-20 pb-10 md:px-10 items-center">
        <h1 className="text-5xl md:text-7xl text-red-700">
          Prato do Dia
        </h1>

        <form className="w-full py-2 md:pt-12 md:pb-4" onSubmit={event => handleSubmit(event)}>
          <div className="flex justify-between border-4 rounded-r-2xl bg-white border-red-600 focus:border-red-700 focus:border-4">
            <input
              type="text"
              className="pl-4 h-16 w-full text-slate-800 font-semibold  outline-none"
              value={inputSearch}
              onChange={(event) => setInputSearch(event.target.value)}
            />
            <button className="flex items-center justify-center bg-red-600 rounded-r-xl w-16 min-h-full" type="submit">
              <Search className="size-10 text-white hover:text-slate-200" />
            </button>
          </div>
        </form>

        {isSearchingRecipe &&
          (
            <ul className="flex items-start flex-col max-h-screen p-2 overflow-y-scroll scrollbar-hide border-4 border-red-600 rounded-md gap-4">
              {receitas.map((receita) => {
                return (
                  <li key={receita.id} className="flex items-center h-full ">
                    <img src={receita.image} alt={receita.titulo} className="min-w-24 h-24 rounded-full" />
                    <div className="mx-4 py-2 border-b-2 border-red-800">
                      <h3 className="text-2xl overflow-hidden pb-1">
                        {receita.titulo}
                      </h3>
                      <p className="text-sm tracking-tight text-slate-600 text-justify max-h-24 overflow-hidden">
                        {receita.instrucoes.join(' ')}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
      </div>
    </div>
  );
}
