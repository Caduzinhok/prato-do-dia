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
        <main className="flex items-center justify-between w-full border-2 border-red-500 h-96">
            <div className="grid grid-cols-2 w-full items-start">
                <div>
                </div>
            </div>
        </main>
    )
}