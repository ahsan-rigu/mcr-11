import React, { useEffect, useState } from "react";
import { movies } from "../data";

export const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    if (!localStorage.getItem("datamovies")) {
      localStorage.setItem("datamovies", JSON.stringify(movies));
    } else {
      let localData = JSON.parse(localStorage.getItem("datamovies"));
      console.log(localData);
      setData(localData);
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
