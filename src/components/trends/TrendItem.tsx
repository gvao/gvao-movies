import { MovieDetails, TMDB } from "@/domain/entities/tmdb"

export const TrendItem = ({ movie, ...props }: { movie: MovieDetails }) =>
(
    <li
        {...props}
        className='rounded shadow-md relative overflow-hidden hover:scale-105 transition opacity-80 hover:opacity-100'
    >
        <h3 className="absolute top-2 left-2 text-black font-bold bg-opacity-60 bg-cyan-500 p-2 rounded" >
            {movie.name || movie.title}
        </h3>
        < img src={TMDB.getImage(movie.backdrop_path)} alt="" className="w-full" />
        <p>type: {movie.media_type} </p>
        <p className="p-1 translate-x-50" > {movie.overview} </p>
    </li>

)           