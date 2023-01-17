import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import FoodPlaceTitle from './FoodPlaceTitle'
import { foodItems } from '../Data/FoodData'
import FoodItem from './FoodItem'

const FoodPlace = () => {
  const {
    activeMenu,
    getSelectedItem,
    selectedItem,
    setChosenFoodElem,
    chosenFoodElem,
    getActiveBasket,
    getSelectedFoodItem,
  } = useContext(FoodContext);
  
  const handleClick = (item) => {
    setChosenFoodElem(true)
    getSelectedItem(item)
    getActiveBasket(true)
    getSelectedFoodItem(item)
  }

  return (
    <>
      <FoodPlaceTitle title={activeMenu.title} />
      <FoodWrapper>        
        <FoodContainer>          
          {foodItems.filter((elem) => {         
            
            if (activeMenu.type) {            
              return elem.type === activeMenu.type              
            } else {              
              return activeMenu        
            }            
          }).map((elem) => (          
            <FoodItem
              key={elem.id}              
              type={elem.type}              
              title={elem.title}              
              description={elem.description}              
              prise={elem.price}
              src={elem.src}
              chosenFoodElem={selectedItem.id===elem.id? chosenFoodElem : ''}
              handleClick={()=>handleClick(elem)}
            />            
          ))}          
        </FoodContainer>          
      </FoodWrapper>
    </>    
  )
}

export default FoodPlace

const FoodWrapper = styled.div`
    width: 100%;
    height: 52.5%;
    overflow: scroll;

    ::-webkit-scrollbar { width: 0; }
`;

const FoodContainer = styled.div`
  margin-top:82px;
  display:grid;
  grid-template-columns: repeat(3, 280px);
`;