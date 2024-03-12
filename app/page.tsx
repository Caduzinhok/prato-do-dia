"use client"
import { Search } from 'lucide-react'
import { FormEvent, useState } from "react";
import { receitas } from "./data/recipe";
import { LogoChef } from './assets/logoChef';
import Link from 'next/link';
import { EmptySearch } from './utils/emptysearch';
import { SearchBarr } from './components/searchbarr';

export default function Home() {
  const [inputSearch, setInputSearch] = useState("")
  const [isNoResults, setIsNoResults] = useState(false)
  const [arrReceitas, setArrReceitas] = useState(receitas)
  function handleSubmit(event: FormEvent) {
    event?.preventDefault()
    setArrReceitas(receitas)
    setArrReceitas(value => value.filter(value => {
      return (
        value.titulo.toUpperCase().includes(inputSearch.toUpperCase())
        ||
        value.instrucoes.join(' ').toUpperCase().includes(inputSearch.toUpperCase())
        ||
        value.ingredientes.join(' ').toUpperCase().includes(inputSearch.toUpperCase())
      )
    }))
    console.log("here")
    const isEmpty = arrReceitas.length == 0 ? true : false    
    setIsNoResults(isEmpty)
    setInputSearch('')
  }
  return (
    <div className="max-w-screen w-screen max-h-screen h-screen grid grid-flow-row grid-rows-3 md:grid-flow-col md:grid-cols-2 md:grid-rows-1">

      <img src="/background-logo.jpg" alt="Background Plate Logo" className="w-full h-full" />

      <div className="flex flex-col bg-slate-100 pt-4 px-2 md:pt-20 md:px-10 items-center">
        <div className='flex items-center gap-3'>
          <LogoChef width={80} height={80} />
          <h1 className="text-5xl md:text-7xl text-red-700 font-bold">
            Prato do Dia
          </h1>
        </div>

        <SearchBarr
          inputSearch={inputSearch}
          handleSubmit={handleSubmit}
          setInputSearch={setInputSearch}
          onRedirectPage={false}
        />

        <div className='flex w-full justify-end py-2'>
          <p>Quer sugerir uma receita? <a href="#" className='text-red-500 underline hover:text-red-700'>Clique Aqui</a></p>
        </div>
        <ul className="no-scrollbar flex items-start flex-col max-h-full h-full  w-full m-2 overflow-y-scroll border-2 border-slate-300 rounded-md gap-4">
          {
            !isNoResults ? (arrReceitas.map((receita) => {
              return (
                <Link
                  href={
                    {
                      pathname: '/recipe',
                      query: {
                        id: receita.id,
                        image: receita.image,
                        titulo: receita.titulo,
                        categoria: receita.categoria,
                        dificuldade: receita.dificuldade,
                        tempoPreparo: receita.tempoPreparo,
                        ingredientes: receita.ingredientes,
                        instrucoes: receita.instrucoes
                      }
                    }
                  }
                  key={receita.id}
                >
                  <li className="item-recipe flex items-center h-full px-2">
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
                </Link>
              )
            })) : <EmptySearch />
          }
        </ul>
      </div>
    </div>
  );
}
