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
`;

const Leaf = styled.img`
    position:absolute;
    right:0;
`;

const Apple = styled.img`
    position:absolute;
    left: 100px;
    bottom: 88px;
`;

const Orange = styled(Leaf)`
    bottom:0;
`;