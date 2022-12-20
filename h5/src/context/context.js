import React, { useState } from "react";
import { defaultCards } from "../data/data";

export const CardsContext = React.createContext();

export const CardsProvider = (props) => {

    const [cardsData, setCardsData] = useState(defaultCards);

    const getCardsData = (props) => {
        setCardsData(prevState => {
            return[props, ...prevState]
        })
    }

    return (
        <CardsContext.Provider value={{ getCardsData, cardsData }}>
            {props.children}
        </CardsContext.Provider>
    )
}
