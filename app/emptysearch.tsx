import { MessageCircleX } from "lucide-react";

export function EmptySearch() {
    return (
        <div className="flex items-center justify-center gap-3 w-full h-full">
            <MessageCircleX />
            <h2>Receita não encontrada</h2>
        </div>
    )
}