import React, { useContext } from 'react'
import shop from '../../assets/shop.svg'
import search from '../../assets/search.svg'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import { useLocation } from 'react-router-dom'

const ShopBlock = () => {
  const { activeBasket, getActiveBasket, selectedFoodItem, isActiveMainMenu } = useContext(FoodContext);

  const shopCount = () => {
    let setCount = 0;
    
    if (selectedFoodItem) {
      selectedFoodItem.forEach(element => {
        if (element.count === 1) {
          setCount += 1
        } else {
          setCount += (1*element.count)
        }
      });
    }
    return setCount;
  }

  const handleBasket = () => {
      getActiveBasket(true)
  }
  return (
    <ShopWrapper isActiveMainMenu={isActiveMainMenu}>
      <FoodCount selectedFoodItem={selectedFoodItem}>{selectedFoodItem.length ? shopCount() : ''}</FoodCount>
      <img src={search} alt=''/>
      <img
        src={shop}
        alt=''
        onClick={handleBasket}
        activeBasket={activeBasket}
      />
    </ShopWrapper>
  )
}

export default ShopBlock

const ShopWrapper = styled.div`
  height:150px;
  display:flex;
  justify-content: end;
  align-items: flex-start;

  img{
    display:block;
    margin-top:30px;
    cursor:pointer;  
    z-index:2;
    margin-right:20px;
  }

  img:last-child{
    margin-right:30px;
  }
  @media (max-width: 1280px) {
    height:135px;

    img{
      margin-top:15px;
    }
  }

  @media (max-width: 1024px) {
    height:115px;

    img{
      width:30px;
      margin-top:25px;
    }

    img:last-child{
      margin-right:50px;
    }
  }

  @media (max-width: 768px) {
    img{
      display:${props=>props.isActiveMainMenu.type === 'home' ? 'block' : 'none'};
    }
  }
`;

const FoodCount = styled.span`
  ${props=>props.selectedFoodItem ? 'display:block;' : 'display:none;'}
  position:absolute;
  z-index:3;
  right: 50px;
  top: 32px;
  font-weight:800;

  @media (max-width: 1280px) {
    top: 18px;
  }

  @media (max-width: 1024px) {
    top: 25px;
    right:60px;
    font-weight:500;
    font-size:12px
  }

  @media (max-width: 768px) {
    top: 32px;
    right:160px;
    font-weight:400;
    font-size:10px
  }

  @media (max-width: 700px) {
    right:143px;
  }

  @media (max-width: 650px) {
    right:127px;
  }

  @media (max-width: 600px) {
    right:103px;
  }

  @media (max-width: 550px) {
    right:88px;
  }

  @media (max-width: 500px) {
    right:118px;
  }

  @media (max-width: 450px) {
    right:100px;
    font-weight:600;
  }

  @media (max-width: 400px) {
    right:84px;
  }
`;