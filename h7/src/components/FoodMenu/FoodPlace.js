import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import FoodPlaceTitle from './FoodPlaceTitle'
import { foodItems } from '../../data/FoodData'
import FoodItem from './FoodItem'
import { useRef } from 'react'

const FoodPlace = () => {
  let isInArray = false
  const {
    activeMenu, getSelectedItem,
    selectedItem, setChosenFoodElem,
    chosenFoodElem, getActiveBasket,
    getSelectedFoodItem, selectedFoodItem,
    slideBasket, setSlideBasket,
  } = useContext(FoodContext);

  const handleClick = (item) => {
    setChosenFoodElem(true)
    setTimeout(()=> setChosenFoodElem(false), 2000)
    getSelectedItem(item)
    setSlideBasket(true)

    if (!slideBasket) {
      getActiveBasket(true)
    }
    
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

  const scrollRef = useRef();
  
  const scrollTop = () => {
    if (scrollRef.current !== '') {
      scrollRef.current.scrollTo({top:0, behavior:'smooth'})
    }
  }

  useEffect(() => {
    scrollTop()
  }, [activeMenu])

  return (
    <>
      <FoodPlaceTitle title={activeMenu? activeMenu.title : ''} />
      <FoodWrapper ref={scrollRef}>        
        <FoodContainer >   
          {foodItems.filter((elem) => {         
            if (activeMenu? activeMenu.type :'') {            
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
              chosenFoodElem={selectedItem? selectedItem.id===elem.id? chosenFoodElem : '' : ''}
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

    ::-webkit-scrollbar { width: 0; };

    @media (max-width: 1024px) {
      height: 59%;
    }

    @media (max-width: 900px) {
      height: 57%;
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
    grid-template-columns: repeat(3, 270px);
    margin-top:40px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 230px);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(3, 200px);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 190px);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 245px);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(2, 230px);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 195px);
  }

  @media (max-width: 370px) {
    grid-template-columns: repeat(2, 175px);
  }
`;