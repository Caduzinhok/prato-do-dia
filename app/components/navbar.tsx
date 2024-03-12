import Link from "next/link";
import { LogoChef } from "../assets/logoChef";

export function Navbar() {
    return (
        <nav className="">
            <div className="py-4 px-4 flex justify-between">
                <div className="flex items-center gap-2">
                    <LogoChef width={60} height={60} />
                    <Link href={{
                        pathname: '/'
                    }}>
                        <h1 className="text-5xl text-red-700 font-bold">
                            Prato do Dia
                        </h1>
                    </Link>
                </div>


            </div>
        </nav>
    )
}