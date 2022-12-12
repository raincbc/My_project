import styled from "styled-components";
import visa from '../assets/visa.jpg';
import chip from '../assets/chip.png';
import Visa from '../assets/Visa.png';
// import show from '../assets/show.png'
// import data from '../assets/data.png'
// import flip from '../assets/flip.png'
// import line from '../assets/line.png'

const VisaCard = (props) => {

    const CardPlace = styled.div`
        width:540px;
        height:335px;
        border-radius:50px;
        background-image: url(${visa});
        background-size: cover;
        padding: 0 55px;
        padding-top:85px;
        margin-bottom:50px;
        box-sizing:border-box;
        z-index:10;
`;
    
    const CardPlaceSpan = styled.span`
        display:block;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 4.17391px;
        color:red
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
`;

    const CardDataSpan = styled.span`
        display:block;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        letter-spacing: 2.4px;
        color:red
`;
    
    const CardDataImg = styled.img`
        height:85px;
    `;

    // const CardMenu = styled.div`
    //     height:200px;
    //     position:absolute;
    //     top:135px;
    //     right:10px;
    //     width:520px;
    //     background-color:white;
    //     margin-left:10px;
    //     display:flex;
    //     align-items: flex-end;
    //     justify-content: space-around;
    //     z-index:1;
    //     padding:0 25px;
    //     box-sizing:border-box;
    //     border-radius:50px;
    // `;

    const CardMenuImg = styled.img`
        width:47px;
        height:47px;
    `;

    return (
        <>
            <CardPlace>
                <Chip src={chip}/>
                <CardPlaceSpan>
                    ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;0000
                </CardPlaceSpan>
                <CardData>
                    <CardDataSpan>
                        John Smith
                    </CardDataSpan>
                    <CardDataImg src={Visa}/>
                </CardData>
                {/* <CardMenu>
                <CardMenuImg src={show} />
                    <img src={ line }/>
                    <CardMenuImg src={data} />
                    <img src={ line }/>
                    <CardMenuImg src={ flip }/>
                </CardMenu> */}
            </CardPlace>
            
        </>
    )
}

export default VisaCard;