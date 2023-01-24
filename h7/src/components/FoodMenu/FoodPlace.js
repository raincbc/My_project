import React, { useContext } from 'react'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import FoodPlaceTitle from './FoodPlaceTitle'
import { foodItems } from '../Data/FoodData'
import FoodItem from './FoodItem'

const FoodPlace = () => {
  let isInArray = false
  const {
    activeMenu,
    getSelectedItem,
    selectedItem,
    setChosenFoodElem,
    chosenFoodElem,
    getActiveBasket,
    getSelectedFoodItem,
    selectedFoodItem,
  } = useContext(FoodContext);
  
  const handleClick = (item) => {
    setChosenFoodElem(true)
    setTimeout(()=> setChosenFoodElem(false), 2000)
    getSelectedItem(item)
    getActiveBasket(true)
    
    if (selectedFoodItem) {
      selectedFoodItem.forEach(elem => {
        if (elem.id === item.id) {
          elem.count = elem.count + 1;
          isInArray = true
        }
      })
    }

    if (!isInArray) {
      getSelectedFoodItem(item)
    }
    
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

    @media (max-width: 1024px) {
      height: 59%;
    }

    @media (max-width: 768px) {
      height: 67%;
    }
`;

const FoodContainer = styled.div`
  margin-top:82px;
  display:grid;
  grid-template-columns: repeat(3, 280px);

  @media (max-width: 1280px) {
    margin-top:68px;
    grid-template-columns: repeat(3, 180px);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 190px);
    margin-top:62px;
  }

  @media (max-width: 768px) {
    margin-top:40px;
  }
`;