import React, { useState } from "react";
import styled from "styled-components";
import visa from '../assets/visa.jpg';
import chip from '../assets/chip.png';
import Visa from '../assets/Visa.png';
import mastercard from '../assets/mastercard.jpeg';
import back from '../assets/back.jpg';
import show from '../assets/show.png';
import flip from '../assets/flip.png';
import data from '../assets/data.png';
import line from '../assets/line.png';
import { defaultStatsVisa, defaultStatsMastercard } from "../data/data";




const Card = (props) => {
    
    const { cardNum, cvv, fullName, type, date } = props;

    const [isNumShow, setNumShow] = useState(false);
    const [isFlip, setFlip] = useState(false);
    const [isDataShow, setData] = useState(false);
    const [cardClick, setClick] = useState(false);

    const filterNum = (cardNum.slice(0, 4))+'  '+(cardNum.slice(4, 8))+'  '+(cardNum.slice(8, 12))+'  '+(cardNum.slice(12, 16)) ;

    const stars = '****  ****  ****  ' + cardNum.slice(12, 16);

    const handleMenu = () => {
        if (cardClick === false) {
            setClick(prev => !prev)
        } else {
            setClick(prev => !prev)
        }

        if (isDataShow) {
            setData(!isDataShow)
        }
    }

    const handleFlipClick = () => {
        if (isFlip === false) {
            setFlip(prev => !prev)
        } else {
            setFlip(prev => !prev)
        }
    }

    const handleCardNumShow = () => {
        if (isNumShow === false) {
            setNumShow(prev => !prev)
        } else {
            setNumShow(prev => !prev)
        }
    }

    const handleDataShow = () => {
        if (isDataShow === false) {
            setData(prev => !prev)
        } else {
            setData(prev => !prev)
        }
    }

    const getCardStats = () => {
        let cardStats = [];

        if (props.type === 'Visa') {
            cardStats = defaultStatsVisa
        } else {
            cardStats = defaultStatsMastercard
        }

        return cardStats
    }
    
    return (
        <CardWrapper isDataShow={isDataShow}>
            <CardFront
                type={type}
                onClick={handleMenu}
                isFlip={isFlip}
                isDataShow={isDataShow}
            >
                <Chip
                    src={chip}
                    isDataShow={isDataShow}
                />
                <span>
                    {isNumShow ? `${filterNum}`
                        : `${stars}`
                    }
                </span>
                <CardData
                    isDataShow={isDataShow}
                >
                    <span>
                        {fullName}
                    </span>
                    <CardDataImg src={Visa}/>
                </CardData>
            </CardFront>
            <CardBack
                type={type}
                onClick={handleMenu}
                isFlip={isFlip}
            >
                <span>
                    {date}
                </span>
                <span>
                    {cvv}
                </span>
            </CardBack>
            <CardMenu
                cardClick={cardClick}
                isDataShow={isDataShow}
            >
            <CardStatsMenu isDataShow={isDataShow}>
                <CardStatsTitle>
                    Card Stats
                </CardStatsTitle>
                {getCardStats().map(({ id, date, place, price }) => (
                    <CardStatsInfo key={id}>
                        <span>{date}</span>
                        <span>{place}</span>
                        <span>{price}</span>
                    </CardStatsInfo>
                ))}
                </CardStatsMenu>
                <ShowImg
                    src={show}
                    onClick={handleCardNumShow}
                    isDataShow={isDataShow}
                />
                <LineImg
                    src={line}
                    isDataShow={isDataShow}
                />
                <FlipImg
                    src={flip}
                    onClick={handleFlipClick}
                    isDataShow={isDataShow}
                />
                <LineImg
                    src={line}
                    isDataShow={isDataShow}
                />
                <DataImg
                    src={data}
                    onClick={handleDataShow}
                    isDataShow={isDataShow}
                />
            </CardMenu>
        </CardWrapper>
    )
}

export default Card;

const CardFront = styled.div`
    cursor:pointer;
    z-index: 3;
    position:absolute;
    width:100%;
    height:${(props) => props.isDataShow ? '200px;' : '100%'};
    border-radius:50px;
    background-image: ${(props) => (props.type === 'Visa' ? `url(${visa})` : `url(${mastercard})`)};
    background-size: cover;
    padding: 0 55px;
    padding-top:${(props) => props.isDataShow ? '45px;' : '85px'};
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
    display:${(props) => props.isDataShow ? 'none' : 'block'};;
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

    ${(props) => props.isDataShow ? 'margin-top:25px;' : 'margin-top:0;'};
`;

const CardDataImg = styled.img`
        height:85px;
    `;
    
const CardBack = styled.div`
    cursor:pointer;
    z-index: 3;
    position:absolute;
    display:flex;
    justify-content: space-between;
    align-items:flex-end;
    width:100%;
    height:100%;
    border-radius:50px;
    background-image: url(${back});
    background-size: cover;
    padding: 0 55px 70px;
    padding-top:85px;
    margin-bottom:50px;
    box-sizing:border-box;
    transition: 0.5s;
    backface-visibility: hidden;
    transform: rotateY(180deg);

    ${(props) => props.isFlip === false ? `transform: rotateY(180deg);` : `transform: rotateY(360deg);`}

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

const CardWrapper = styled.div`
    width:540px;
    height:${(props) => props.isDataShow ? '600px;' : '335px'};
    position: relative;
    perspective: 1000px;
    margin-bottom:70px;
    transition:1s;
`;

const CardMenu = styled.div`
    height:${(props) => props.isDataShow ? '600px;' : '70px'};;
    width:490px;
    position:absolute;
    display:flex;
    padding-bottom:5px;
    justify-content: space-between;
    align-items:flex-end;
    z-index:1 ;
    left: 25px;
    bottom:${(props) => (props.cardClick ? '-55px' : '1px' )};
    transition:0.5s;
    background-color:white;
    border-radius:0 0 50px 50px ;
`;

const ShowImg = styled.img`
    margin:0 auto;
    cursor:pointer;
    ${(props) => props.isDataShow ? 'display:none;' : 'display:block;'};
    
`;

const FlipImg = styled(ShowImg)`

`;

const DataImg = styled(ShowImg)`

`;

const LineImg = styled.img`
    ${(props) => props.isDataShow ? 'display:none;' : 'display:block;'};
`;

const CardStatsMenu = styled.div`
    position:absolute;
    top:150px;
    width:490px;
    height:60%;
    display:${(props) => props.isDataShow ? 'block' : 'none'};;
`;

const CardStatsTitle = styled.h4`
    font-family: 'Abel';
    font-weight: 400;
    font-size: 48px;
    margin:30px 0 30px 40px;
`;

const CardStatsInfo = styled.div`
    padding: 0 30px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    align-content: flex-start;


    span{
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        letter-spacing: 2.4px;
        display:inline-block;
    }
`;