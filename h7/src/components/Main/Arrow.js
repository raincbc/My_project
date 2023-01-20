import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'

const Arrow = () => {
    return <ArrowImg src={arrow} alt='' />
}


const ArrowImg = styled.img`
    display:block;
    margin:50% auto;
    transform:translate(0, -50%)
`;

export default Arrow;