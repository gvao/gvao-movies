import Link from "next/link";

import { TMDB } from "@/domain/entities/tmdb";
import { TrendsListProps, UseTrendsInput } from "./types"
import { TrendsFilterByType } from "./trendsFilterBytype";
import { TrendsPagination } from "./TrendsPagination";
import { TrendItem } from './TrendItem'

const useTrends = async ({ page, time_window }: UseTrendsInput) => {
    const tmdb = new TMDB()
    const { results } = await tmdb.getTrends({ page, time_window })

    return { results }
}

export const TrendsList = async ({ page, filterBy, time_window = "day" }: TrendsListProps) => {
    const { results } = await useTrends({ page, time_window })

    return <>
        <TrendsFilterByType results={results} page={page} filterBy={filterBy} />

        <ul className="flex flex-wrap gap-4 p-4" >
            {
                results
                    .filter(result => {
                        if (!filterBy) return true
                        return result.media_type === filterBy
                    })
                    .map(result => (
                        <Link href={`/trends/${result.media_type}/${result.id}`} className="cursor-pointer" key={result.id}>
                            <TrendItem movie={result} />
                        </Link>
                    ))
            }
        </ul>

        <TrendsPagination page={page} />
    </>
}

