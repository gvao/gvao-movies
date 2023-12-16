import Link from "next/link"

import { MovieDetails } from "@/domain/entities/tmdb"
import { RecordsFilter } from "./types"

const useTrendsFilterByType = (results: MovieDetails[], filterBy: string) => {
    const typesRecords = results
        .reduce((acc: Record<string, number>, record) => {
            acc[record.media_type] = acc[record.media_type] + 1 || 1
            return acc
        }, {})

    const hasTypeFilter = (type: string) => type === filterBy

    return { typesRecords, hasTypeFilter }
}

export const TrendsFilterByType = ({ results, filterBy, page }: { results: MovieDetails[] } & RecordsFilter) => {

    const { typesRecords, hasTypeFilter } = useTrendsFilterByType(results, filterBy)
    return (
        <ul className="space-x-4 items-center my-auto p-4">
            {
                Object.entries(typesRecords)
                    .map(([type, value]) => (
                        <Link
                            key={type}
                            className={`p-2 rounded shadow opacity-80 ${hasTypeFilter(type) && `bg-cyan-500 opacity-100`}`}
                            href={{
                                query: { page, type: hasTypeFilter(type) ? "" : type }
                            }}
                        >
                            {type}: {value}
                        </Link>
                    ))
            }
        </ul>
    )
}
