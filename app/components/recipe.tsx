"use client"

import { AlarmClock } from "lucide-react";

interface PropsRecipe {
    id: number;
    image: string;
    titulo: string;
    categoria: string;
    dificuldade: string;
    tempoPreparo: string;
    ingredientes: string[];
    instrucoes: string[];
}

export function Recipe(PropsRecipe: PropsRecipe) {
    return (
        <main className="flex items-start justify-between w-full max-h-[calc(100vh - 92px)] shadow-xl p-4">
            <div className="grid grid-cols-2 w-full items-start p-2 h-full">
                <div className="flex items-center justify-center flex-col flex-wrap gap-4 px-24">
                    <img src={PropsRecipe.image} alt="Image Recipe" className="w-full h-64 rounded-lg" />
                    <div className="flex justify-between w-full">
                        <img src={PropsRecipe.image} alt="Image Recipe" className="w-32 h-24 rounded-lg" />
                        <img src={PropsRecipe.image} alt="Image Recipe" className="w-32 h-24 rounded-lg" />
                        <img src={PropsRecipe.image} alt="Image Recipe" className="w-32 h-24 rounded-lg" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <h1 className="text-5xl font-semibold text-sky-800">
                        {PropsRecipe.titulo}
                    </h1>
                    <div className="w-full justify-between flex items-start">
                        <div className="text-xl font-medium flex flex-col">
                            <p className="text-sky-800">Dificuldade: <span className="text-slate-700">{PropsRecipe.dificuldade}</span> </p>
                            <p className="text-sky-800">Categoria: <span className="text-slate-700">{PropsRecipe.categoria}</span></p>
                        </div>
                        <div className="items-center flex">
                            <AlarmClock />
                            <span className="font-normal pl-2">{PropsRecipe.tempoPreparo}</span>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-2xl text-sky-800 font-semibold">
                            Instruções
                        </h3>
                        <p className="text-slate-500 leading-tight pl-2 text-justify">
                            {PropsRecipe.instrucoes}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl text-sky-800 font-semibold">
                            Ingredientes
                        </h3>
                        <ul className="px-8 py-2">
                            
                            {PropsRecipe.ingredientes.map((ingrediente) => {
                                return (
                                    <li key={ingrediente} className="list-disc text-slate-500">
                                        {ingrediente}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}