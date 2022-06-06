import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate } from 'react-router-dom';

export const MovieControls = ({ type, movie }) => {

  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
    movieDetail,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleClick =  () => {
    navigate("/detail");
    movieDetail(movie);
    console.log(movie.id);
  }
  

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        
        <>

          <button className="ctrl-btn" onClick={handleClick }>
            <i className="fa-fw far fa fa-info-circle"></i>
          </button>

          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>

          <button className="ctrl-btn" onClick={handleClick }>
            <i className="fa-fw far fa fa-info-circle"></i>
          </button>
          
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

    </div>
  );
};
