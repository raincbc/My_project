import React, { useContext } from 'react'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import FoodPlaceTitle from './FoodPlaceTitle'
import { foodItems } from '../Data/FoodData'
import FoodItem from './FoodItem'

const FoodPlace = () => {
  const { activeMenu } = useContext(FoodContext)
  console.log(activeMenu)
  return (
    <FoodWrapper>
      <FoodPlaceTitle title={activeMenu.title} />
      <FoodContainer>
        {foodItems.filter((elem) => {
          if(activeMenu.type) {
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
          />
        ))}
      </FoodContainer>
    </FoodWrapper>
  )
}

export default FoodPlace

const FoodWrapper = styled.div`
    width: 100%;
    height: 50%;
    overflow: scroll;

    ::-webkit-scrollbar { width: 0; }
`;

const FoodContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 225px);
`;