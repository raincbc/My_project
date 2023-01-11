import styled from "styled-components";
import face from '../../assets/face.png'

const Title = ({text}) => {
    return (
        <TextWrapper>
            <TitleText>{text}</TitleText>
            <Face src={ face } />
        </TextWrapper>
    )
}

export default Title;

const TextWrapper = styled.div`
    position:relative;
    text-align:center;
`;

const TitleText = styled.h1`
    
    padding-top:100px;
    margin: 0 auto;
    width:320px;
    font-family: 'Spartan';
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    font-family: 'League Spartan', sans-serif;
`;

const Face = styled.img`
    position:absolute;
    right:730px;
    top:162px;
    width:62px;
`;
