// import React, { useState } from "react";
import styled from "styled-components";
import chip from '../../assets/chip.png';
import Visa from '../../assets/Visa.png';
import back from '../../assets/back.jpg';

const AddCardCard = (props) => {
    
    const { cardNum, fullName, type } = props;

    return (
        <CardWrapper>
            <CardFront type={type}>
                <Chip src={chip} />
                <span>                    
                    {cardNum}                    
                </span>                
                <CardData>                    
                    <span>                        
                        {fullName}                        
                    </span>                    
                    <CardDataImg src={Visa} />                    
                </CardData>                
            </CardFront>            
        </CardWrapper>        
    )
}

export default AddCardCard;

const CardFront = styled.div`
    cursor:pointer;
    z-index: 3;
    position:absolute;
    width:100%;
    height:100%;
    border-radius:50px;
    background-image: url(${back});
    background-size: cover;
    padding: 0 55px;
    padding-top:85px;
    margin-bottom:50px;
    box-sizing:border-box;
    transition: 0.5s;
    backface-visibility: hidden;

    ${(props) => props.isFlip  ? `transform: rotateY(180deg);` : `transform: rotateY(0deg);`}

    span{
        display:block;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 4.17391px;
        color: black;
    }
`; 

const Chip = styled.img`
    width:50px;
    margin-bottom:50px;
`;

const CardData = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;

    span{
        line-height: 31px;
        letter-spacing: 2.4px;
    }
`;

const CardDataImg = styled.img`
    height:85px;
`;

const CardWrapper = styled.div`
    width:540px;
    height:${(props) => props.isDataShow ? '600px;' : '335px'};
    position: relative;
    perspective: 1000px;
    margin-bottom:70px;
    transition:1s;
`;
