import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Movie from "./Pages/Movie";
import Search from "./Pages/Search";
import Add from "./Pages/Add";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
