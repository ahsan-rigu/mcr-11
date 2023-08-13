import React from "react";
import { Link, useNavigate } from "react-router-dom";
const { BsStar, BsHouse } = require("react-icons/bs");

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <span className="logo">MCR 11 | Ahsan</span>
      <form
        onSubmit={(e) =>
          e.preventDefault() || navigate("/search/" + e.target[0].value)
        }
      >
        <input type="text" placeholder="Search (hit enter)" />
      </form>
      <span className="buttons">
        <Link to="/">
          <BsHouse size={"1.5rem"} />
        </Link>
        <Link to="/starred">
          <BsStar size={"1.5rem"} />
        </Link>
      </span>
    </header>
  );
};

export default Header;
