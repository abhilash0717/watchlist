import React, {useState} from "react";
import ResultCard from './ResultCard';

export default function Add () {
  const [query, setQuery] = useState(""); //used for storing the movie name entred
  const [results, setResults] = useState([]);

  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=98ef7c5e25ad1925b3ee0d5cd004014d&language=en-us&page=1&include_adult=false&query=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
      if(!data.errors){
        setResults(data.results);
        console.log("resultys array ----");
        console.log(results);
      }else{
        setResults([]);
      }
    })
  }

  return (
    <div className="add-page">
      <div className="container">
          <div className="add-content">
              <div className="input-wrapper">
                  <input type="text" 
                  placeholder = "Search for a movie"
                  value = {query}
                  onChange = {onChange} />
                </div>
                {results.length > 0 && (
                  <ul className="results">
                      {results.map(movie => (
                       <li key = {movie.id}>
                          <ResultCard movie = {movie} />
                       </li>
                      ))}
                    </ul>
                )}
            </div>
        </div>  
    </div>
  );
};
