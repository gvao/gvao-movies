import { SubTitle, Title } from "@/components/typography";
import { MovieDetails, TMDB } from "@/domain/entities/tmdb";
import Link from "next/link";

export default async function Home({ params: { page } }: { params: { page: string } }) {

  return (
    <section>

      <div className="container">
        <div className="bg-cyan-500 h-28 flex justify-center items-center">
          <Title>GM</Title>
        </div>

        {/* <SubTitle>Melhores filmes</SubTitle> */}

        <Trends page={+page || 1} />

      </div>
    </section>
  )
}

const Trends = async ({ page }: { page: number }) => {
  const tmdb = new TMDB()

  const { results } = await tmdb.getTrends({ page })

  return <>
    <ul className="flex flex-wrap gap-4 p-4" >
      {results.map(result => (
        <Link href={`#`} className="cursor-pointer" >
          <TrendItem movie={result} />
        </Link>
      ))}
    </ul>

    <section id="pagination">

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
    <p className="p-1 translate-x-50">{movie.overview}</p>
  </li>
)