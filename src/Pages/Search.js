import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

const Search = () => {
  const { data } = useContext(DataContext);

  const { query } = useParams();

  console.log(query);

  let show = data.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.director.toLowerCase().includes(query.toLowerCase()) ||
      movie.cast.join(" ").toLowerCase().includes(query.toLowerCase())
  );

  console.log(show);

  return (
    <div className="flex-page">
      {show.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Search;
