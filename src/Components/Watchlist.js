import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { MovieCard } from "./MovieCard";


export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  
  //sort movies by title then release date
  watchlist.sort(function(a, b) {
    var dateA = new Date(a.release_date || a.first_air_date);
    var dateB = new Date(b.release_date || b.first_air_date);
    var titleA = ( a.title?.split(' ').slice(0,2).join(' ') || a.name?.split(' ').slice(0,2).join(' ') );
    var titleB = ( b.title?.split(' ').slice(0,2).join(' ') || b.name?.split(' ').slice(0,2).join(' ') );
    //console.log("Split: " + titleA)
    return (titleA.localeCompare(titleB) || dateA - dateB); 
  });
  
  
  return (
    <div className="movie-page"> 
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          
          <span className="count-pill">
            {watchlist.filter(media => media.hasOwnProperty("title")).length}
            {watchlist.filter(media => media.hasOwnProperty("title")).length === 1 ? " Movie and " : " Movies and "}
            {watchlist.filter(media => media.hasOwnProperty("name")).length}
            {watchlist.filter(media => media.hasOwnProperty("name")).length === 1 ? " Tv Show " : " Tv Shows "}
          </span>
        </div>

        <div className="result-title">
                <p> Movies </p>
        </div>
        {watchlist.filter(media => media.hasOwnProperty("title")).length > 0 ? (
          <div className="movie-grid">
            {watchlist.filter(media => media.hasOwnProperty("title"))
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h4 className="no-movies">No movies in your list! Add some!</h4>
        )}

        <div className="result-title">
          <p> Tv Shows </p>
        </div>
        {watchlist.filter(media => media.hasOwnProperty("name")).length > 0 ? (
          <div className="movie-grid">
            {watchlist.filter(media => media.hasOwnProperty("name"))
            .map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="watchlist" />
        ))}
          </div>
        ) : (
          <h2 className="no-movies">No shows in your list! Add some!</h2>
        )}

      </div>
    </div>
  );
};