import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { CardsContext } from "../context/context";

const MyCardsPlace = styled.div``;

const MyCards = (props) => {

    const { albumsData } = useContext(CardsContext);
    console.log(albumsData)
    return (
        <MyCardsPlace>
            <CardsContext.Consumer>
                {(elem) => {
                    console.log(elem)
                }}
            </CardsContext.Consumer>
            {/* {albumsData.map()} */}
        </MyCardsPlace>
    )
}

export default MyCards;