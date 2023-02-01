import React, { useContext } from 'react'
import shop from '../../assets/shop.svg'
import search from '../../assets/search.svg'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'

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
    <ShopWrapper isActiveMainMenu={isActiveMainMenu} >
      <FoodCount selectedFoodItem={selectedFoodItem}>{selectedFoodItem.length ? shopCount() : ''}</FoodCount>
      <Img src={search} alt=''/>
      <Img
        src={shop}
        alt=''
        onClick={handleBasket}
        activeBasket={activeBasket}
      />
    </ShopWrapper>
  )
}

export default ShopBlock

const Img = styled.img``;

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
  display:${props=>props.selectedFoodItem.length  ? 'block' : 'none'};
  position:absolute;
  z-index:3;
  right: 30px;
  top: 20px;
  font-weight:800;
  border:1px solid violet;
  border-radius:50%;
  padding:2px 5px;
  background-color: violet;

  @media (max-width: 1280px) {
    top: 18px;
  }

  @media (max-width: 1024px) {
    top: 15px;
    right:45px;
    font-weight:500;
    font-size:12px
  }

  @media (max-width: 768px) {
    top: 23px;
    right:135px;
    font-weight:400;
    font-size:10px
    padding:2px 4px;
  }

  @media (max-width: 700px) {
    right:115px;
  }

  @media (max-width: 650px) {
    right:100px;
  }

  @media (max-width: 600px) {
    right:80px;
  }

  @media (max-width: 550px) {
    right:65px;
  }

  @media (max-width: 500px) {
    right:95px;
  }

  @media (max-width: 450px) {
    right:70px;
    font-weight:600;
    padding:2px 5px;
  }

  @media (max-width: 400px) {
    right:65px;
  }
`;