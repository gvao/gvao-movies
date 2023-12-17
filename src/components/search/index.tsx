'use client'
import { TMDB } from "@/domain/entities/tmdb";
import { FormEventHandler, useState } from "react";
import { BiSearch } from "react-icons/bi";

function debounce<T>(callback: (param: T) => void, delay = 1000) {
    let timeOutId: NodeJS.Timeout

    return (params: T) => {
        clearInterval(timeOutId)
        timeOutId = setTimeout(callback, delay, params)
    }
}

export default function Search() {
    const [data, setData] = useState<[] | null>(null)

    const searchQuery = debounce<string>(async (query) => {
        const response = await fetch(`/api/search?query=${query}`)
        const { results } = await response.json()
        setData(results)
    }, 2000)

    const onInput: FormEventHandler<HTMLInputElement> = (event) => {
        const input = event.target as HTMLInputElement
        searchQuery(input.value)
    }

    return (
        <form
            className="w-full h-fit relative p-2"
            onSubmit={event => event.preventDefault()}
        >
            <input
                id="search"
                type="search"
                name="search"
                autoFocus
                className="w-full h-full p-2 rounded-full px-4 py-4"
                onInput={onInput}
            />

            <button
                type="submit"
                className="absolute aspect-square right-4 top-4 bottom-4 bg-cyan-500 p-2 rounded-full"
            >
                <BiSearch />
            </button>
        </form>
    )
}               