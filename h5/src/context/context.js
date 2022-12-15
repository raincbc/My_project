import React, { useState } from "react";

export const CardsContext = React.createContext();

export const CardsProvider = (props) => {

    const [albumsData, setAlbumsData] = useState([]);

    const setNum = (props) => {
        console.log(props)
        const cardNum = props.cardNum.cardNum;
        
        return setAlbumsData({albumsData:cardNum})
    }

    console.log(albumsData)


    return (
        <CardsContext.Provider value={{ setNum }}>
            {props.children}
        </CardsContext.Provider>
    )
}
