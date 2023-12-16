import { Title } from "@/components/typography"
import { TMDB } from "@/domain/entities/tmdb"

const DetailsPage = async ({ params }: { params: { id: string } }) => {
    const tmdb = new TMDB
    const { backdrop_path, name, popularity, overview } = await tmdb.getTvById(params.id)

    return <>
        <img src={TMDB.getImage(backdrop_path)} alt="backdrop" className="w-full" />
        <Title>{name}</Title>
        <span>{popularity}</span>
        <p>{overview}</p>
    </>
}
export default DetailsPage