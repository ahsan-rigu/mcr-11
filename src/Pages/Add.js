import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const { data, setData } = useContext(DataContext);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const newMovie = {
      id: data.length + 1,
      title: e.target.title.value,
      director: e.target.director.value,
      writer: e.target.writer.value,
      cast: e.target.cast.value.split(","),
      imageURL: e.target.imageURL.value,
      summary: e.target.summary.value,
      genre: e.target.genre.value.split(","),
      description: e.target.description.value,
      rating: Number(e.target.rating.value),
      year: Number(e.target.year.value),
    };
    const newData = [...data, newMovie];
    localStorage.setItem("datamovies", JSON.stringify(newData));
    setData(newData);
    navigate("/");
  };

  return (
    <form onSubmit={handleAdd} className="add-form">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" required />
      <label htmlFor="director">Director</label>
      <input type="text" id="director" required />
      <label htmlFor="writer">Writer</label>
      <input type="text" id="writer" required />
      <label htmlFor="cast">Cast, comma seperated</label>
      <input type="text" id="cast" required />
      <label htmlFor="imageURL">Image URL</label>
      <input type="text" id="imageURL" required />
      <label htmlFor="summary">Summary</label>
      <input id="summary" required />
      <label htmlFor="genre">Genre, comma seperated</label>
      <input type="text" id="genre" required />
      <label htmlFor="description">Description</label>
      <input id="description" required />
      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" required />
      <label htmlFor="year">Year</label>
      <input type="text" id="year" required />
      <button>Add</button>
    </form>
  );
};

export default Add;
