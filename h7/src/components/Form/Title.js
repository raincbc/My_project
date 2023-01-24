import { useLocation } from "react-router-dom";
import styled from "styled-components";
import face from '../../assets/face.png'

const Title = ({ text , faceLoader}) => {
    const location = useLocation();

    return (
        <TextWrapper location={location.pathname}>
            <TitleText>{text}</TitleText>
            <Face
                src={face}
                faceLoader={faceLoader} />
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
    line-height: 50px;
    font-family: 'League Spartan', sans-serif;

    @media (max-width: 1280px) {
        width:280px;
        font-weight: 800;
        font-size: 42px;
        line-height: 50px;
    }

    @media (max-width: 1024px) {
        width:250px;
        font-weight: 800;
        font-size: 36px;
        line-height: 40px;
    }

    @media (max-width: 768px) {
        padding-top:50px;
        font-size: 30px;
        width:200px;
    }

    @media (max-width: 400px) {
        padding-top:40px;
        font-size: 26px;
        width:180px;
        line-height: 30px;
        margin-bottom:40px;
    }
`;

const Face = styled.img`
    position:absolute;
    right:0;
    top:140px;
    width:62px;
    display:${props => props.faceLoader ? 'none' : 'inline'};

    @media (max-width: 1280px) {
        width:55px;
        top:145px;
    }

    @media (max-width: 1024px) {
        width:45px;
        top:135px;
        right:10px;
    }

    @media (max-width: 768px) {
        top:85px;
        right:-3px
    }

    @media (max-width: 400px) {
        top:65px;
        width:35px;
    }
`;
