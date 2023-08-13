import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import { useParams } from "react-router-dom";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const Movie = () => {
  const { id } = useParams();

  const { data, setData } = useContext(DataContext);

  console.log(data);

  const movie = data.find((item) => item.id === Number(id));

  const handleStarred = () => {
    const newData = data.map((item) => {
      if (item.id === movie.id) {
        return { ...item, starred: !item.starred };
      }
      return item;
    });
    localStorage.setItem("datamovies", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="movie-page">
      <img src={movie.imageURL} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <p>Year: {movie.year}</p>
        <p>Genre: {movie.genre.join(", ")}</p>
        <p>Rating: {movie.rating}</p>
        <p>Director: {movie.director}</p>
        <p>Writer: {movie.writer}</p>
        <p>Cast: {movie.cast.join(", ")}</p>
        <button className="tr btn-circle" onClick={handleStarred}>
          {movie.starred ? (
            <BsFillStarFill size={"3rem"} />
          ) : (
            <BsStar size={"3rem"} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Movie;
