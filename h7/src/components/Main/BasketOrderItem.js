import styled from "styled-components"
import pizzabasket from '../../assets/pizzabasket.png'
import burgerbasket from '../../assets/burgerbasket.png'

const BasketOrderItem = ({ type, title, description, price }) => {
    console.log(type)

    const getImg = () => {
        switch (type) {
            case 'burger':
                return burgerbasket
            case 'pizza':
                return pizzabasket;
            case 'salad':
                return
            case 'donut':
                return
            case 'drinks':
                return
            default:
                return ''
        }
    }
    
    
  return (
    <Container>
        <img src={getImg()} alt='' />
        <Description>
            <p>{title}</p>
            <span>{description}</span>                  
        </Description>
        <Content>
            <Span>123</Span>
            <span>456</span>
        </Content>
    </Container>
  )
}

export default BasketOrderItem

const Container = styled.div`
    display:flex;
    align-items:center;

    img{
        display:inline-block;
        margin-right:20px
    }

    span{
        font-weight: 600;
        font-size: 9px;
        line-height: 10px;
        color: #898686;
    }
`;

const Description = styled.div`
    align-items:center;
    width:150px;
    justify-content:space-between;
    margin-right:10px;
    
    p{
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
    }
`;

const Content = styled.div`
    align-self:flex-start;

    span{
        
    }
`;

const Span = styled.span`
font-weight: 700;
        font-size: 8px;
        line-height: 18px;
`;