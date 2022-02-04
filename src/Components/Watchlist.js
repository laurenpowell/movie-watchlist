import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { MovieCard } from "./MovieCard";


export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(JSON.stringify(Watchlist));
  //sort movies by release date
  watchlist.sort(function(a, b) {
    var dateA = new Date(a.release_date), dateB = new Date(b.release_date);
    return dateA - dateB;
  });
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};