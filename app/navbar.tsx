import { Home } from "lucide-react";
import Link from "next/link";
import { LogoChef } from "./assets/logoChef";

export function Navbar() {
    return (
        <nav className="max-h-24 bg-red-100 rounded-b-lg">
            <div className="py-4 px-4 flex justify-between">
                <div className="flex items-center gap-2">
                    <LogoChef width={40} height={40}/>
                    <h1 className="text-3xl text-red-700">
                        Prato do Dia
                    </h1>
                </div>
                <Link
                    href={
                        { pathname: '/' }
                    }
                >
                    <Home className="size-12 text-red-700" />
                </Link>

            </div>
        </nav>
    )
}