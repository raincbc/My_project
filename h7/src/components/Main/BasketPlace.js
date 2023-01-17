import React, { useContext } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'
import { FoodContext } from '../../context/context'

const BasketPlace = () => {
    const { activeBasket, getActiveBasket, setSelectedFoodItem, selectedItem, setChosenFoodElem } = useContext(FoodContext);

    const handleHide = () => {
        getActiveBasket(false);
        setChosenFoodElem(false)
    }

    const handleClick = () => {
        setSelectedFoodItem('')
    }

  return (
    <Container active={activeBasket}>
          <BasketTitle>
              <p>Basket</p>
              <span onClick={handleHide}>
                  <img src={arrow} alt='' />
              </span>
          </BasketTitle>
          <BasketOrder></BasketOrder>
          <button onClick={handleClick}>Order - $</button>
    </Container>
  )
}

export default BasketPlace

const Container = styled.div`
    width:70%;
    height:91%;
    right:${(props) => props.active ? '0' : '-415px'};
    top:30px;
    box-shadow: ${(props) => props.active ? '0' : '0px 4px 46px rgba(0, 0, 0, 0.2)'};
    border-radius: 30px 0px 0px 30px;
    position:absolute;
    background-color:white;
    z-index:5;
    padding:32px 21px 32px 32px;
    box-sizing:border-box;
    transition:1s;

    button{
        border:none;
        background: #2D9CDB;
        border-radius: 15px;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        color:white;
        width:100%;
        padding:16px 0;
        cursor:pointer;
    }
`;
const BasketTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:22px;

    p{
        font-weight: 800;
        font-size: 30px;
        line-height: 34px;  
    }

    span{
        background: #F5F6F7;
        border-radius: 15px;
        width:46px;
        height:46px;
        cursor:pointer;

        img{
            display:block;
            margin:50% auto;
            transform:translate(0, -50%)
        }
    }
`;
const BasketOrder = styled.div`
    height:80%;
`;

