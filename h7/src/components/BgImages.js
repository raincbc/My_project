import grapes from '../assets/grapes.png'
import leaf from '../assets/leaf.png'
import apple from '../assets/apple.png'
import orange from '../assets/orange.png'
import styled from 'styled-components'

const BgImages = () => {
    return (
        <>
            <Grapes src={grapes} />
            <Leaf src={ leaf } />
            <Apple src={ apple } />
            <Orange src={ orange } />
        </>
    )
}

export default BgImages;

const Grapes = styled.img`
    position:absolute;
    left:0;

    @media (max-width: 1280px) {
        transform:scale(0.7);
    }

    @media (max-width: 1024px) {
        transform:scale(0.5);
    }
`;

const Leaf = styled.img`
    position:absolute;
    right:0;

    @media (max-width: 1280px) {
        transform:scale(0.7);
    }

    @media (max-width: 1024px) {
        transform:scale(0.5);
    }
`;

const Apple = styled.img`
    position:absolute;
    left: 100px;
    bottom: 88px;

    @media (max-width: 1280px) {
        transform:scale(0.6);
        left: 50px;
    }

    @media (max-width: 1024px) {
        transform:scale(0.5);
        bottom: 0;
    }
`;

const Orange = styled(Leaf)`
    bottom:0;

    @media (max-width: 1280px) {
        transform:scale(0.7);
    }

    @media (max-width: 1024px) {
        transform:scale(0.5);
        bottom: -50px;
    }
`;