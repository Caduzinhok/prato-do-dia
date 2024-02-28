"use client"
import Image from "next/image";
import {Search} from 'lucide-react'
import { useState } from "react";
export default function Home() {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <div className="max-w-screen w-screen max-h-screen h-screen grid grid-flow-row grid-rows-3 md:grid-flow-col md:grid-cols-2 md:grid-rows-1">
      
      <img src="/background-logo.jpg" alt="Background Plate Logo" className="w-full h-full" />

      <div className="flex flex-col bg-slate-100 py-10 px-2 md:py-20 md:px-10 items-center">
          <h1 className="text-5xl md:text-7xl text-red-700">
            Prato do Dia
          </h1>

      <form className="w-full py-4 md:py-12">
        <div className="flex justify-between border-2 rounded-r-2xl bg-white border-red-500 focus:border-red-700 focus:border-4">
          <input
          type="text"
          className="pl-4 h-16 w-full text-slate-800 font-semibold  outline-none"
          value={inputSearch}
          onKeyDown={(event) =>  setInputSearch(event.target.value)}
          />
          <button className="flex items-center" type="submit">
            <Search className="size-10 mr-4 text-slate-600 hover:text-slate-800" />
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
