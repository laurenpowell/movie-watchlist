import React from "react";
import Moment from "react-moment";

export const DetailCard = ({ movie, type }) => {

  return (
    <div className="detail-card">
        <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
        />

        <div className="details">
            <div>
                <p><strong>Title:</strong> {movie.title || movie.name || null}</p>
                <p><strong>Release Year:</strong> <Moment format="YYYY">{movie.release_date|| movie.first_air_date || null }</Moment></p>
                <p><strong>Overview:</strong> {movie.overview}</p>
                <p><strong>Language:</strong> {movie.original_language}</p>
            </div>
      </div>
    </div>
  );
};