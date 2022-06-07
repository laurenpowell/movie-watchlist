import React, {useState} from 'react';
import { ResultCard } from "./ResultCard";
import axios from 'axios';


export const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [tvResults, setTvResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        const urls = [
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`),
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        ]

        Promise.allSettled(urls)
          .then((results) => {
            setResults(results[0]?.value?.data?.results);
            setTvResults(results[1]?.value?.data?.results);
          }).catch((err) => {
            console.log(err);
          });
    };

  
    //sort movies by date
    results?.sort(function(a, b) {
      var dateA = new Date(a.release_date), dateB = new Date(b.release_date);
      return dateB - dateA;
    });

    tvResults?.sort(function(a, b) {
      var dateA = new Date(a.first_air_date), dateB = new Date(b.first_air_date);
      return dateB - dateA;
    });
    return (
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search for a movie or tv show"
                value={query}
                onChange={onChange}
              />
              <div className="result-title">
                <p> Movies </p>
              </div>
                  {results?.length > 0 && (
                    <ul className="results">
                      {results?.map((movie) => (
                        <li 
                          key={movie.id}>
                          <ResultCard movie={movie} />
                        </li>
                      ))}
                    </ul>
                  )}
                <div className="result-title">
                  <p> Tv Shows </p>
                </div>
                  {tvResults?.length > 0 && (
                    <ul className="results">
                      {tvResults?.map((movie) => (
                        <li 
                          key={movie.id}>
                          <ResultCard movie={movie} />
                        </li>
                      ))}
                    </ul>
                  )}
              
            </div>
          </div>
        </div>
      </div>
    ); 
};