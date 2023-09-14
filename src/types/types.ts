export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export type Movie = {
    year: string;
    genres: string[];
    ratings: number[];
    poster: string;
    contentRating: string;
    duration: string;
    releaseDate: string;
    averageRating: number;
    storyline: string;
    actors: string[];
    imdbRating: number;
    posterurl: string;
    id: number;
    title: string;
};
