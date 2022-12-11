import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovieshandler = async() => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformed = data.results.map((moviesData) => {
      return {
        id: moviesData.episode_id,
        title: moviesData.title,
        openingText: moviesData.opening_crawl,
        releaseDate: moviesData.release_date,
      };
    });
    setMovies(transformed);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieshandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
