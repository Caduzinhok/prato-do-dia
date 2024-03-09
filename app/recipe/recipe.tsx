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
        <main className="flex items-center justify-between w-full mt-8 py-8 rounded-md bg-lime-300">
            <div className="grid grid-cols-2 w-full">
                <div className="flex items-center justify-center p-4">
                    Images Carrousel
                </div>

                <div className="py-4">
                    <h1 className="text-2xl text-slate-800">
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