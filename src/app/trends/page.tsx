import { SubTitle, Title } from "@/components/typography";
import { MovieDetails, TMDB } from "@/domain/entities/tmdb";
import Link from "next/link";

export default async function TrendPage({ searchParams }: { searchParams: { page: string, type: string } }) {
  const { page, type } = searchParams

  return (
    <section>

      <div className="container">

        <div className="bg-cyan-500 h-28 flex justify-center items-center">
          <Title>GM</Title>
        </div>

        <TrendsList page={+page || 1} filterBy={type} />

      </div>
    </section>
  )
}

const TrendsList = async ({ page, filterBy }: { page: number, filterBy: string }) => {
  const tmdb = new TMDB()
  const { results } = await tmdb.getTrends({ page })

  const typesRecords = results
    .reduce((acc: Record<string, number>, record) => {
      acc[record.media_type] = acc[record.media_type] + 1 || 1
      return acc
    }, {})

  const pagesToNavigation = new Array(10).fill(null).map((_, i) => page + i)

  const getStyleIfEqualPage = (pageNumber: number) => {
    if (pageNumber === page) return "bg-cyan-500 aspect-square p-2 rounded font-semibold"
    return ""
  }

  return <>
    <ul className="space-x-4 items-center my-auto p-4">
      {
        Object.entries(typesRecords)
          .map(([type, value]) => (
            <Link
              key={type}
              className={`p-2 rounded shadow opacity-80 ${type === filterBy && `bg-cyan-500 opacity-100`}`}
              href={{
                query: { page, type }
              }}
            >
              {type}:{value}
            </Link>
          ))
      }
    </ul>

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

    <section id="pagination" className="flex justify-evenly items-center">
      {
        pagesToNavigation
          .map(pageNumber => (
            <Link
              key={`page-${pageNumber}`}
              className={getStyleIfEqualPage(pageNumber)}
              href={`?page=${pageNumber}`}>
              {pageNumber}
            </Link>
          ))
      }
    </section>
  </>
}

const TrendItem = ({ movie, ...props }: { movie: MovieDetails }) => (
  <li
    {...props}
    className='rounded shadow-md relative overflow-hidden hover:scale-105 transition opacity-80 hover:opacity-100'
  >
    <h3 className="absolute top-2 left-2 text-black font-bold bg-opacity-60 bg-cyan-500 p-2 rounded" >
      {movie.name || movie.title}
    </h3>
    <img src={TMDB.getImage(movie.backdrop_path)} alt="" className="w-full" />
    <p>type: {movie.media_type}</p>
    <p className="p-1 translate-x-50">{movie.overview}</p>

  </li>
)