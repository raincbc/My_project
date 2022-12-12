import React from "react";
import styled from "styled-components";
import VisaCard from "../cards/Visa";
import MasterCard from "../cards/Mastercad";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 540px;
    padding: 50px 80px 0;
`;

const Navigate = styled.nav`
    display:flex;
    justify-content: space-between;
    margin-bottom:80px;
`;

const NavBtn = styled.button`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 47px;
    line-height: 61px;
    letter-spacing: 4.17391px;
    color: #000000;
    border:none;
    background-color:transparent;
    cursor:pointer;
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

const StartPage = () => {
    return (
        <Container>
            <Navigate> 
                <Link to='/my-cards'>
                    <NavBtn>
                        Your cards                    
                    </NavBtn>
                </Link>
                <Link to='/add-card'>
                    <NavPlus>
                        <FirstLine/>
                        <SecondLine/>
                    </NavPlus>
                </Link>
            </Navigate>
            <VisaCard/>
            <MasterCard/>
        </Container>
    )
}

export default StartPage;