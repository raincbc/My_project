import React from 'react'
import styled from 'styled-components'
import ShopBlock from './ShopBlock'
import DiscountBlock from './DiscontBlock'
import { discountData } from '../Data/MainData'
import BasketPlace from './BasketPlace'

const OrderPlace = () => {
  return (
    <OrderContainer> 
      <BasketPlace/>
      <ShopBlock />      
      <DiscountBlock discountData={discountData} />      
    </OrderContainer>
  )
}

export default OrderPlace

const OrderContainer = styled.div`
width:370px;
`;
