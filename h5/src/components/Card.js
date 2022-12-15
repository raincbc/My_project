import styled from "styled-components";
import visa from '../assets/visa.jpg';
import chip from '../assets/chip.png';
import Visa from '../assets/Visa.png';
import mastercard from '../assets/mastercard.webp';
import back from '../assets/back.jpg'

const CardPlace = styled.div`
    position:absolute;
    width:540px;
    height:335px;
    border-radius:50px;
    background-image: ${(props) => (props.type === 'Visa' ? `url(${visa})` : `url(${mastercard})`)};
    background-size: cover;
    padding: 0 55px;
    padding-top:85px;
    margin-bottom:50px;
    box-sizing:border-box;
    transition: 1s;
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
    display:flex;
    justify-content: space-between;
    align-items:flex-end;
    width:540px;
    height:335px;
    border-radius:50px;
    background-image: url(${back});
    background-size: cover;
    padding: 0 55px 70px;
    padding-top:85px;
    margin-bottom:50px;
    box-sizing:border-box;
    transition: 1s;
    backface-visibility: hidden;
    transform: rotateY(180deg);

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
    position: relative;
    perspective: 1000px;
    
    &:hover >${CardPlace} {
        transform: rotateY(180deg);
    }

    &:hover >${CardBack} {
        transform: rotateY(360deg);
    }
`;

const Card = (props) => {

    const { cardNum, cvv, fullname, type, date } = props;

    const filterNum = (cardNum.slice(0, 4))+'  '+(cardNum.slice(4, 8))+'  '+(cardNum.slice(8, 12))+'  '+(cardNum.slice(12, 16)) ;

    const stars = '****  ****  ****  ' + cardNum.slice(12, 16);

    const handleClick = (event) => {
        const value = event.target.innerText;

        if (value.includes('*')) {
            event.target.innerText = filterNum;
        } else {
            event.target.innerText = stars;
        }
    }
    
    return (
        <CardWrapper>
            <CardPlace type={type}>
                <Chip src={chip}/>
                    <span onClick={handleClick}>
                        {stars}
                    </span>
                <CardData>
                    <span>
                        {fullname}
                    </span>
                    <CardDataImg src={Visa}/>
                </CardData>
            </CardPlace>
            <CardBack type={type}>
                <span>
                    {date}
                </span>
                <span>
                    {cvv}
                </span>
            </CardBack>            
        </CardWrapper>
    )
}

export default Card;