import React, { useContext } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/context";


const StartPage = () => {
    const { cardsData } = useContext(CardsContext);

    return (
        <Container>
            <Navigate> 
                <TitleText>
                    Your Cards
                </TitleText>
                <Link to='/add-card'>
                    <NavPlus>
                        <FirstLine/>
                        <SecondLine/>
                    </NavPlus>
                </Link>
            </Navigate>
            {cardsData.map((elem) => (
                <Card
                    key={elem.id}
                    cardNum={elem.cardNum}
                    cvv={elem.cvv}
                    fullname={elem.fullname}
                    type={elem.type}
                    date={elem.date}
                />
            ))}
        </Container>
    )
}

export default StartPage;


const Container = styled.div`
    width: 540px;
    padding: 0 80px;
`;

const Navigate = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

const NavPlus = styled.div`
    cursor:pointer;
    position:relative;
    width: 47px;
    height: 47px;
    border-radius:8px;
    border: 3px solid black
    
`;

const FirstLine = styled.div`
    width: 25px;
    height: 3px;
    background-color: black;
    position: absolute;
    top:22px;
    left:10px;
`;

const SecondLine = styled.div`
    transform: rotate(90deg);
    width: 25px;
    height: 3px;
    background-color: black;
    position: absolute;
    top:22px;
    left:10px;
`;

const TitleText = styled.h4`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 47px;
    letter-spacing: 4.17391px;
    color: #000000;
`;