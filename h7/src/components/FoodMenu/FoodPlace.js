import React, { useContext } from 'react'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import FoodPlaceTitle from './FoodPlaceTitle'

const FoodPlace = () => {
  const{activeMenu} = useContext(FoodContext)
  return (
    <FoodWrapper>
      <FoodPlaceTitle title={activeMenu.title} />
    </FoodWrapper>
  )
}

export default FoodPlace

const FoodWrapper = styled.div`
    width: 100%;
    height: 100%;
`;