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
        <main className="flex items-center justify-between w-full mt-8 py-8 rounded-3xl border-red-300 border-2 border-x-[30px] border-x-red-500">
            <div className="grid grid-cols-2 w-full">
                <div className="flex items-center justify-center p-1 rounded-xl ml-2">
                    <img src={PropsRecipe.image} alt={PropsRecipe.titulo} className="w-full rounded-md"/>
                </div>

                <div className="py-2 p-4">
                    <h1 className="text-2xl text-white pl-2 bg-slate-400">
                        {PropsRecipe.titulo}
                    </h1>
                    <p className="text-lg text-slate-500">
                         {PropsRecipe.categoria}
                    </p>
                </div>
            </div>
        </main>
    )
}