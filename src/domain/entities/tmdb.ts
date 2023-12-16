export type MovieDetails = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title?: string,
    name?: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type OutputTrends = {
    page: number,
    results: MovieDetails[],
    total_pages: number,
    total_results: number
}

type InputTrends = {
    page?: number,
    time_window?: 'day' | 'week'
}

type Movie = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: unknown,
    budget: number,
    genres: { id: number, name: string }[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: {
        id: number,
        logo_path: unknown,
        name: string,
        origin_country: string
    }[],
    production_countries: { iso_3166_1: string, name: string }[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: { english_name: string, iso_639_1: string, name: string }[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type Tv = {
    adult: boolean,
    backdrop_path: string,
    created_by: {
        id: number,
        credit_id: string,
        name: string,
        gender: number,
        profile_path: string | null
    }[],
    episode_run_time: [],
    first_air_date: string,
    genres: { id: number, name: string }[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: {
        id: number,
        name: string,
        overview: string,
        vote_average: number,
        vote_count: number,
        air_date: string,
        episode_number: number,
        episode_type: string,
        production_code: string,
        runtime: number,
        season_number: number,
        show_id: number,
        still_path: string
    },
    name: string,
    next_episode_to_air: string | null,
    networks: {
        id: number,
        logo_path: string,
        name: string,
        origin_country: string
    }[],
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: {
        id: number,
        logo_path: string,
        name: string,
        origin_country: string
    }[],
    production_countries: { iso_3166_1: string, name: string }[],
    seasons: {
        air_date: string,
        episode_count: number,
        id: number,
        name: string,
        overview: string,
        poster_path: string,
        season_number: number,
        vote_average: number
    }[],
    spoken_languages: { english_name: string, iso_639_1: string, name: string }[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}

const getOptions = (apiKey: string, method: "get" | "post" = "get"): RequestInit => {
    const object: Record<string, RequestInit> = {
        get: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            next: {
                revalidate: 60,
            }
        }
    }

    return object[method]
}

export class TMDB {
    private accountId = process.env.TMDB_ACCOUNT_ID
    private apiKey = process.env.TMDB_ACESS_TOKEN
    URL_BASE = 'https://api.themoviedb.org'

    static getImage(path: string): string {
        return `https://image.tmdb.org/t/p/w500/${path}`
    }

    async getTvById(series_id: string): Promise<Tv> {
        const path = `/3/tv/${series_id}?language=pt-BR`;
        const url = this.URL_BASE + path
        const options = getOptions(this.apiKey!)

        const response = await fetch(url, options)

        return await response.json()
    }
    async getMovieById(id: string): Promise<Movie> {
        const path = `/3/movie/${id}?language=pt-BR`;
        const url = this.URL_BASE + path
        const options = getOptions(this.apiKey!)

        const response = await fetch(url, options)

        return await response.json()
    }

    async getTrends({ page = 1, time_window = 'day' }: InputTrends): Promise<OutputTrends> {

        const url = `${this.URL_BASE}/3/trending/all/${time_window}?language=pt-BR&page=${page}`;
        const options = getOptions(this.apiKey!)

        return fetch(url, options)
            .then(res => res.json())
            .catch(err => console.error('error:' + err));
    }

    async getMovies() {
        const response = await fetch(`${this.URL_BASE}/3/movie/11?api_key=${this.apiKey}`)
        return await response.json()
    }

    async getAccount() {
        const url = this.URL_BASE + `/3/account/${this.accountId}`;
        const options = getOptions(this.apiKey!)

        const response = await fetch(url, options)
        return response.json()
    }
}