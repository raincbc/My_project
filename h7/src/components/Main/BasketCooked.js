import styled from 'styled-components'
import coocked from '../../assets/coocked.png'

const BasketCooked = () => {
    return (
        <Container>
            <img src={coocked} alt=''/>
            <p>
                in the process of cooking...
            </p>
        </Container>
  )
}

export default BasketCooked

const Container = styled.div`
    text-align:center;
    img{
        width:165px;
        margin-top:100px;
        margin-bottom:10px;
    }

    p{
        font-weight: 800;
        font-size: 14px;
        line-height: 16px;
        margin-bottom:50px;
    }
`;