import { MessageCircleX } from "lucide-react";

export function EmptySearch() {
    return (
        <div className="flex items-center justify-center gap-3 w-full h-full">
            <MessageCircleX className="size-8"/>
            <h2 className="text-xl">Receita não encontrada</h2>
        </div>
    )
}