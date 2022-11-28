import React from "react";
import { useState, useEffect } from "react";

export const DataContext = React.createContext();

export const  AlbumProvider = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
          const json = await response.json();
        setData(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    }, []);

    return (
        < DataContext.Provider value={{ data }} >
            {props.children}
        </DataContext.Provider >
    ) 
    
}