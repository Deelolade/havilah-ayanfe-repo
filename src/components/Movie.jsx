import { useState } from "react";
import movie from "../consumables/movie";
const Movie = () => {
    const [movieList, setMovieList] = useState(movie);

    const clearAll = () => {
        setMovieList([]);
    };
    const refetch = () => {
        console.log(movie);
        setMovieList(movie);
        console.log("movie lists", movieList);
    };
    const remove = (id) => {
        const results = movieList.filter((movie) => movie.id !== id);
        setMovieList(results);
    };

    const genre = (genre) => {
        const newMovie = movieList.filter(
            (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
        );
        setMovieList(newMovie);
    };

    const category = (category) => {
        const newMovie = movieList.filter(
            (movie) =>
                movie.category.toLocaleLowerCase() === category.toLocaleLowerCase()
        );
        setMovieList(newMovie);
    };
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-3">
                {" "}
                We have {movieList.length} {movieList.length === 1 ? "movie" : "movies"}{" "}
                available
            </h1>
            <div className="space-x-4 mt-5 flex justify-center ">
                <button
                    onClick={clearAll}
                    className="bg-red-500 px-3 py-1 text-white rounded-sm"
                >
                    clear all
                </button>
                <button
                    onClick={refetch}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    fetch all
                </button>
            </div>
            <div className="genre my-4 space-x-6 flex justify-center">
                <button
                    onClick={() => genre("action")}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    Action
                </button>
                <button
                    onClick={() => genre("anime")}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    Anime
                </button>
                <button
                    onClick={() => genre("thriller")}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    Thriller
                </button>
                <button
                    onClick={() => genre("drama")}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    drama
                </button>
            </div>
            <div className="categories my-4 space-x-6 flex justify-center">
                <button
                    onClick={() => category("nollywood")}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    Nollywood
                </button>
                <button
                    onClick={() => category("hollywood")}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    Hollywood
                </button>
                <button
                    onClick={() => category("japanese")}
                    className="bg-green-500 px-3 py-1 text-white rounded-sm"
                >
                    {" "}
                    Japanese
                </button>
            </div>
            <div className="grid grid-cols-4 gap-4 ">
                {movieList?.map((movie, idx) => {
                    return (
                        <div key={idx}>
                            <img src={movie.imageUrl} alt="" className="h-96 w-96" />
                            <h2 className="text-3xl ">{movie.title}</h2>
                            <div>
                                {" "}
                                <p className="text-sm text-gray-600">{movie.genre}</p>
                                <p>{movie.category}</p>
                            </div>
                            <button
                                onClick={() => remove(movie.id)}
                                className="bg-red-500 px-3 py-1 text-white rounded-sm"
                            >
                                clear
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Movie;
