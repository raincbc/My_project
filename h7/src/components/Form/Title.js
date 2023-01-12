import { useLocation } from "react-router-dom";
import styled from "styled-components";
import face from '../../assets/face.png'

const Title = ({ text }) => {
    const location = useLocation();

    return (
        <TextWrapper location={location.pathname}>
            <TitleText>{text}</TitleText>
            <Face src={ face } />
        </TextWrapper>
    )
}

export default Title;

const TextWrapper = styled.div`
    position:relative;
    max-width: max-content;
    ${(props) => props.location === '/main' ? 'text-align:start;' : 'text-align:center;'};
    ${(props) => props.location === '/main' ? 'margin:0;' : 'margin:0 auto;'} ;
`;

const TitleText = styled.h1`
    padding-top:100px;
    width:320px;
    font-family: 'Spartan';
    font-weight: 800;
    font-size: 48px;
    line-height: 65px;
    font-family: 'League Spartan', sans-serif;
`;

const Face = styled.img`
    position:absolute;
    right:0;
    top:162px;
    width:62px;
`;
