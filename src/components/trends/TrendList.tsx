import { MovieDetails } from "@/domain/entities/tmdb"
import Link from "next/link"
import { TrendItem } from "./TrendItem"

export const TrendsList = ({ data, filterBy }: { data: MovieDetails[], filterBy?: string }) => (
    <ul className="flex flex-wrap gap-4 p-4" >
        {
            data
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
)