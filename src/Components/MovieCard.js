import React from "react";
import Moment from "react-moment";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {

  return (
    <div className="movie-card">
      <div className="overlay"></div>
      
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <h4 className="release-date">
        <Moment format="YYYY">{movie.release_date|| movie.first_air_date || null }</Moment>
      </h4>
      <h4 className="release-date">
        {movie.title || movie.name || null}
      </h4>
      
      <MovieControls type={type} movie={movie} />
    </div>
  );
};