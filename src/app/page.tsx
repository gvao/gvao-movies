import Link from "next/link"
import { ReactNode } from "react"

import { TMDB } from "@/domain/entities/tmdb"
import { SubTitle } from '../components/typography'

const DefaultPage = async () => {

    return (
        <>
            <ul className="flex flex-col gap-2 p-4">
                <DefaultLink href={'/Movies'}>Movies</DefaultLink>

            </ul>

            <TrendsList />
        </>
    )
}

const TrendsList = async () => {
    const tmdb = new TMDB
    const { results } = await tmdb.getTrends({ page: 1, time_window: 'day' })

    return (
        <section className="py-2 px-4 space-y-2">

            <div className="flex justify-between">
                <SubTitle>Tendêcias do dia</SubTitle>
                <Link className="cursor-pointer p-2 bg-cyan-500 rounded" href={'/trends'}>Ver mais</Link>

            </div>

            <ul className="flex gap-4 overflow-x-auto" >
                {results.map(result => (
                    <Link
                        href={`/trends/${result.media_type}/${result.id}`}
                        key={result.id}
                    >
                        <li
                            className="group relative w-52 border shrink-0 rounded shadow overflow-hidden"
                        >
                            <img src={TMDB.getImage(result.poster_path)} alt="" className="aspect-auto object-cover h-full" />
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )

}


const DefaultLink = ({ children, href, ...props }: { children: ReactNode, href: string }) => (
    <Link
        {...props}
        href={href}
        className="bg-cyan-500 p-2 rounded shadow text-center text-2xl font-bold" >
        {children}
    </Link>
)


export default DefaultPage