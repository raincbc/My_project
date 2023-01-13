import React from 'react'
import styled from 'styled-components'
import ShopBlock from './ShopBlock'
import DiscountBlock from './DiscontBlock'
import { discountData } from '../Data/MainData'

const OrderPlace = () => {
  return (
    <OrderContainer> 
          <ShopBlock />
          <DiscountBlock discountData={discountData} />
    </OrderContainer>
  )
}

export default OrderPlace

const OrderContainer = styled.div``;