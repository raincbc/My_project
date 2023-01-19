import styled from 'styled-components'
import coocked from '../../assets/coocked.png'

const BasketCooked = () => {
    return (
        <Conteiner>
            <img src={coocked} alt=''/>
            <p>
                in the process of cooking...
            </p>
        </Conteiner>
  )
}

export default BasketCooked

const Conteiner = styled.div`
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