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

export class TMDB {
    private accountId = process.env.TMDB_ACCOUNT_ID
    private apiKey = process.env.TMDB_ACESS_TOKEN
    URL_BASE = 'https://api.themoviedb.org'

    getTrends = async ({ page = 1, time_window = 'day' }: InputTrends): Promise<OutputTrends> => {

        const url = `${this.URL_BASE}/3/trending/all/day?language=pt-BR&page=${page}`;
        const options: RequestInit = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            },
            next: {
                revalidate: 60,
            }
        };

        return fetch(url, options)
            .then(res => res.json())
            .catch(err => console.error('error:' + err));
    }

    async getMovies() {
        const response = await fetch(`${this.URL_BASE}/3/movie/11?api_key=${this.apiKey}`)
        return await response.json()
    }

    static getImage(path: string): string{
        return `https://image.tmdb.org/t/p/w500/${path}`
    }

    async getAccount() {
        const url = this.URL_BASE + `/3/account/${this.accountId}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjJmYTY0ZjAxY2QxMTE0NDBkMmQyOTA2NDk3NWFiMyIsInN1YiI6IjY1N2M5MDA4NTY0ZWM3MDBhY2Q2OGQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GLPOUvdYYRNQVwUj9aD_zscxx2Kcc_z8uuVwJPrvvHw'
            }
        };

        const response = await fetch(url, options)
        return await response.json()
    }
}