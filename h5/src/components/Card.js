import React, { useState } from "react";
import styled from "styled-components";
import visa from '../assets/visa.jpg';
import chip from '../assets/chip.png';
import Visa from '../assets/Visa.png';
import mastercard from '../assets/mastercard.webp';
import back from '../assets/back.jpg';
import show from '../assets/show.png';
import flip from '../assets/flip.png';
import data from '../assets/data.png';
import line from '../assets/line.png';




const Card = (props) => {
    
    const { cardNum, cvv, fullname, type, date } = props;

    const [isNumShow, setNumShow] = useState(false);
    const [isFlip, setFlip] = useState(false);
    const [isDataShow, setData] = useState(false);
    const [cardClick, setClick] = useState(false);
    console.log(isFlip)

    const filterNum = (cardNum.slice(0, 4))+'  '+(cardNum.slice(4, 8))+'  '+(cardNum.slice(8, 12))+'  '+(cardNum.slice(12, 16)) ;

    const stars = '****  ****  ****  ' + cardNum.slice(12, 16);

    const handleMenu = () => {
        if (cardClick === false) {
            setClick(true)
        } else {
            setClick(false)
        }
    }

    const handleFlipClick = () => {
        if (isFlip === false) {
            setFlip(true)
        } else {
            setFlip(false)
        }
    }

    const handleDataShow = () => {
        if (isDataShow === false) {
            setData(true)
        } else {
            setData(false)
        }
    }
    
    return (
        <CardWrapper>
            <CardFront
                type={type}
                onClick={handleMenu}
            >
                <Chip src={chip}/>
                <span>
                    {isDataShow ? `${filterNum}`
                        : `${stars}`
                    }
                </span>
                <CardData>
                    <span>
                        {fullname}
                    </span>
                    <CardDataImg src={Visa}/>
                </CardData>
            </CardFront>
            <CardBack
                type={type}
                onClick={handleMenu}
            >
                <span>
                    {date}
                </span>
                <span>
                    {cvv}
                </span>
            </CardBack>
            <CardMenu cardClick={cardClick}>
                <ShowImg
                    src={show}
                    onClick={handleDataShow}
                />
                <LineImg src={line} />
                <FlipImg
                    src={flip}
                    onClick={handleFlipClick}
                    isFlip={isFlip}
                />
                <LineImg src={line} />
                <DataImg
                    src={data}
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
    height:100%;
    border-radius:50px;
    background-image: ${(props) => (props.type === 'Visa' ? `url(${visa})` : `url(${mastercard})`)};
    background-size: cover;
    padding: 0 55px;
    padding-top:85px;
    margin-bottom:50px;
    box-sizing:border-box;
    transition: 0.5s;
    backface-visibility: hidden;

    span{
        display:block;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 4.17391px;
        color: ${(props) => (props.type === 'Visa' ? `blue` : `red`)};
    }
`; 

const Chip = styled.img`
    display:block;
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

    // ${(props) => (props.isFlip === false ? (`transform: rotateY(360deg);`) : (`transform: rotateY(-360deg);`))}

    span{
        display:block;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 4.17391px;
        color:${(props) => (props.type === 'Visa' ? `blue` : `red`)};

    }
`;

const CardWrapper = styled.div`
    width:540px;
    height:335px;
    position: relative;
    perspective: 1000px;
    margin-bottom:70px;
    

    // &:hover >${CardFront} {
    //     transform: rotateY(180deg);
    // }

    // &:hover >${CardBack} {
    //     transform: rotateY(360deg);
    // }
`;

const CardMenu = styled.div`
    height:70px;
    width:490px;
    position:absolute;
    display:flex;
    padding-bottom:5px;
    justify-content: space-between;
    align-items:flex-end;
    z-index:1 ;
    left: 25px;
    bottom:${(props) => (props.cardClick === false ? '0' : '-55px')};
    transition:0.5s;
    background-color:white;
    border-radius:0 0 50px 50px ;
`;

const ShowImg = styled.img`
    margin:0 auto;
    cursor:pointer;
`;

const FlipImg = styled(ShowImg)`

`;

const DataImg = styled(ShowImg)`

`;

const LineImg = styled.img`

`;