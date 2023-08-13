import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import MovieCard from "../Components/MovieCard";

const Starred = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="flex-page">
      {data
        .filter((movie) => movie.starred)
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default Starred;
