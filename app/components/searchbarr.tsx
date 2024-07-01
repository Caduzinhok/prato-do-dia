"use client"
import { Search } from "lucide-react"
interface SearchBarrProps{
    handleSubmit: Function
    inputSearch: string
    setInputSearch: Function
    onRedirectPage: boolean
}

export function SearchBarr(props: SearchBarrProps) {
    return (
        <form className="w-full md:pt-12" onSubmit={event => props.handleSubmit(event)}>
          <div className="flex justify-between border-2 rounded-r-2xl bg-white border-red-600 focus:border-red-700">
            <input
              type="text"
              className="pl-4 h-16 w-full text-slate-800 font-semibold outline-none"
              value={props.inputSearch}
              onChange={(event) => props.setInputSearch(event.target.value)}
            />
            <button className="flex items-center justify-center bg-red-600 rounded-r-xl w-16 min-h-full" type="submit">
              <Search className="size-10 text-white hover:text-slate-200" />
            </button>
          </div>
        </form>
    )
}