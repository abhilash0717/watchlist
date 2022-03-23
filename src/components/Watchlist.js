import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';
import MovieCard from "./MovieCard";
export default function Watchlist () {

  const {watchList} = useContext(GlobalContext);

  return (
   <div className="movie-page">
     <div className="container">
       <div className="header">
         <h1 className="heading">My WatchList</h1>
       </div>

       {watchList.length > 0 ? 
       (
        <div className="movie-grid">
        {watchList.map(movie => (
          <MovieCard movie={movie} type = {watchList} />
        ))}
      </div>
       ) 
      : (
        <h2 className="no-movies">No movies in your list, add some!</h2>
      )
      }
     </div>
   </div>
  );
};
