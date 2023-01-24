import styled from "styled-components";
import pizzabasket from '../../assets/pizzabasket.png';
import burgerbasket from '../../assets/burgerbasket.png';
import saladbasket from '../../assets/saladbasket.png'
import donutbasket from '../../assets/donutbasket.png';
import drinksbasket from '../../assets/drinksbasket.png';

const BasketOrderItem = ({ type, title, description, price, itemCount }) => {

    const getImg = () => {
        switch (type) {
            case 'burger':
                return burgerbasket;
            
            case 'pizza':
                return pizzabasket;
            
            case 'salad':
                return saladbasket;
            
            case 'donut':
                return donutbasket;
            
            case 'drinks':
                return drinksbasket;
            
            default:
                return ''
        }
    }
    
    
  return (
    <Container>
        <BasketItemIcon src={getImg()} alt='' />
        <DescriptionContent>
            <p>{title}</p>
            <Description>{description}</Description>                  
        </DescriptionContent>
        <Content>
            <span>X{itemCount}</span>
              <span>${price}</span>
        </Content>
    </Container>
  )
}

export default BasketOrderItem

const Container = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:15px;
`;

const BasketItemIcon = styled.img`
    display:inline-block;
    margin-right:10px;

    @media (max-width: 768px) {
        width:30px;
    }
`;

const DescriptionContent = styled.div`
    align-items:center;
    width:150px;
    justify-content:space-between;
    margin-right:10px;
    
    p{
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
    }

    @media (max-width: 768px) {
        p{
            margin-top:0;
        }
    }
`;

const Description = styled.span`
    font-weight: 600;
    font-size: 9px;
    line-height: 10px;
    color: #898686;

    @media (max-width: 768px) {
        display:none
    }
`;

const Content = styled.div`
    align-self:flex-start;

    span{
        font-weight: 700;
        font-size: 12px;
        line-height: 18px;
        margin-right:10px
    }

    @media (max-width: 768px) {
        align-self:center;
    }
`;
