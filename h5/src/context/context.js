import React, { useState } from "react";
import { defaultCards } from "../data/data";

export const CardsContext = React.createContext();

export const CardsProvider = (props) => {

    const [albumsData, setAlbumsData] = useState(defaultCards);

    const getAlbumsData = (props) => {
        console.log(props)
        setAlbumsData(prevState => {
            return[props, prevState]
        })
    }

    return (
        <CardsContext.Provider value={{ getAlbumsData, albumsData }}>
            {props.children}
        </CardsContext.Provider>
    )
}
