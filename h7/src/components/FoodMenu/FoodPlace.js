import React from 'react'
import styled from 'styled-components'
import FoodPlaceTitle from './FoodPlaceTitle'

const FoodPlace = () => {
  return (
    <FoodWrapper>
      <FoodPlaceTitle/>
    </FoodWrapper>
  )
}

export default FoodPlace

const FoodWrapper = styled.div`
    width: 100%;
    height: 100%;
`;