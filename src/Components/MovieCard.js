import React, { useContext } from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { DataContext } from "../Contexts/DataContext";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data, setData } = useContext(DataContext);

  const navigate = useNavigate();

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
    <div className="card" onClick={() => navigate("/movie/" + movie.id)}>
      <img src={movie.imageURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      <button className="tr btn-circle" onClick={handleStarred}>
        {movie.starred ? (
          <BsFillStarFill size={"1.5rem"} />
        ) : (
          <BsStar size={"1.5rem"} />
        )}
      </button>
    </div>
  );
};

export default MovieCard;
