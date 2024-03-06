export default function AboutPage({receita } : {
    receita: {
        id: number;
        image: string;
        titulo: string;
        categoria: string;
        dificuldade: string;
        tempoPreparo: string;
        ingredientes: string[];
        instrucoes: string[];
    }
}){
    return(
        <h1>{receita && receita.titulo}</h1>
    )
} 