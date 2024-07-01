"use client"
import Link from "next/link";
import { LogoChef } from "../assets/logoChef";
import { LogoName } from "../assets/logoName";
import { SearchBarr } from "./searchbarr";

export function Navbar() {
    return (
        <nav className="">
            <div className="py-4 px-4 flex justify-between">
                <div className="flex items-center gap-2">
                    <LogoChef width={60} height={60} />
                    <Link className="pl-2" href={{
                        pathname: '/'
                    }}>
                        <LogoName width={240} height={50}/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}