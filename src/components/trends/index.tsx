import { TrendsListProps, UseTrendsInput } from "./types"

import { TMDB } from "@/domain/entities/tmdb";
import { TrendsFilterByType } from "./trendsFilterByType";
import { TrendsPagination } from "./TrendsPagination";
import { TrendsList } from "./TrendList";

export const useTrends = async ({ page, time_window }: UseTrendsInput) => {
    const tmdb = new TMDB()
    const { results } = await tmdb.getTrends({ page, time_window })

    return { results }
}

const Trends = async ({ page, filterBy, time_window = "day" }: TrendsListProps) => {
    const { results } = await useTrends({ page, time_window })

    return <>
        <TrendsFilterByType results={results} page={page} filterBy={filterBy} />

        <TrendsList data={results} filterBy={filterBy} />
        <TrendsPagination page={page} />
    </>
}

export default Trends