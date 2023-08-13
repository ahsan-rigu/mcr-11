import React, { useContext, useState } from "react";
import { DataContext } from "../Contexts/DataContext";
import MovieCard from "../Components/MovieCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useContext(DataContext);

  const [filterInput, setFilterInput] = useState({});

  const years = data.reduce((acc, movie) => {
    if (!acc.includes(movie.year)) {
      return [...acc, movie.year];
    }
    return acc;
  }, []);

  const ratings = data.reduce((acc, movie) => {
    if (!acc.includes(movie.rating)) {
      return [...acc, movie.rating];
    }
    return acc;
  }, []);

  const genres = data.reduce((acc, movie) => {
    movie.genre.forEach((genre) => {
      if (!acc.includes(genre)) {
        acc.push(genre);
      }
    });
    return acc;
  }, []);

  let show = data;

  if (filterInput.genre) {
    show = show.filter((movie) => movie.genre.includes(filterInput.genre));
  }
  if (filterInput.year) {
    show = show.filter((movie) => movie.year == filterInput.year);
  }
  if (filterInput.rating) {
    show = show.filter((movie) => movie.rating == filterInput.rating);
  }

  return (
    <>
      <div className="filter-add">
        Filter
        <select
          onChange={(e) =>
            setFilterInput({ ...filterInput, genre: e.target.value })
          }
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select
          onChange={(e) =>
            setFilterInput({ ...filterInput, year: e.target.value })
          }
        >
          <option value="">All</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          onChange={(e) =>
            setFilterInput({ ...filterInput, rating: e.target.value })
          }
        >
          <option value="">All</option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
        <Link to="/add">Add Movie</Link>
      </div>
      <div className="flex-page">
        {show.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
