import { Navbar } from "../navbar";
import { Recipe } from "./recipe";

export default function AboutPage({ searchParams }: {
    searchParams: {
        id: number;
        image: string;
        titulo: string;
        categoria: string;
        dificuldade: string;
        tempoPreparo: string;
        ingredientes: string[];
        instrucoes: string[];
    }
}) {
    return (
        <div className="flex justify-center">
            <div className=" max-w-6xl w-full">
                <Navbar />

                {searchParams?.id &&
                    <Recipe
                        id={searchParams.id}
                        image={searchParams.image}
                        titulo={searchParams.titulo}
                        categoria={searchParams.categoria}
                        dificuldade={searchParams.dificuldade}
                        tempoPreparo={searchParams.tempoPreparo}
                        ingredientes={searchParams.ingredientes}
                        instrucoes={searchParams.instrucoes}
                    />}
            </div>
        </div>
    )
} 