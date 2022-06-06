import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist")
        ? JSON.parse(localStorage.getItem("watchlist"))
        : [],
    watched: localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [],
    detail: localStorage.getItem("detail")
        ? JSON.parse(localStorage.getItem("detail"))
        : [],  
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //When add btn is triggered, save to local storage
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
        localStorage.setItem("detail", JSON.stringify(state.detail));
        localStorage.removeItem("detail", JSON.stringify(state.detail));
      }, [state]);

      
    //actions
    const addMovieToWatchlist = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };
    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };
    
    const addMovieToWatched = (movie) => {
      dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    };
  
    const moveToWatchlist = (movie) => {
      dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
    };
  
    const removeFromWatched = (id) => {
      dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
    };

    const movieDetail = (movie) => {
      dispatch({ type: "MOVIE_DETAIL", payload: movie });
    };
    return (
        <GlobalContext.Provider
        value={{
            watchlist: state.watchlist,
            watched: state.watched,
            detail: state.detail,
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched,
            movieDetail,
          }}
        >
          {props.children}
        </GlobalContext.Provider>
    );
};