import styled from "styled-components";
import visa from '../assets/visa.jpg';
import chip from '../assets/chip.png';
import Visa from '../assets/Visa.png';
import mastercard from '../assets/mastercard.webp';
import Mastercard from '../assets/Mastercard.png'

const Card = (props) => {
    console.log(props.data)
    const { cardNum, cvv, fullname, type } = props.data;
    console.log(type)

    const CardPlace = styled.div`
        width:540px;
        height:335px;
        border-radius:50px;
        background-image: ${(type) => (type = 'Visa' ? `url(${visa})` : `url(${mastercard})`)};
        background-size: cover;
        padding: 0 55px;
        padding-top:85px;
        margin-bottom:50px;
        box-sizing:border-box;

        &:nth-child(2){
            display:block;
            font-family: 'Abel';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 38px;
            letter-spacing: 4.17391px;
            color:blue;
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

        &:first-child{
            display:block;
            font-family: 'Abel';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 31px;
            letter-spacing: 2.4px;
            color:red
        }
`;

    const CardDataImg = styled.img`
        height:85px;
    `;

    return (
        <>
            <CardPlace>
                <Chip src={chip}/>
                <span>
                    {cardNum}
                    {/* ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;0000 */}
                </span>
                <CardData>
                    <span>
                        {fullname}
                    </span>
                    <CardDataImg src={Visa}/>
                </CardData>
            </CardPlace>
            
        </>
    )
}

export default Card;