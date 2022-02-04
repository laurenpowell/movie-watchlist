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
              <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        


      <MovieControls type={type} movie={movie} />
    </div>
  );
};