import React from 'react'
import styled from 'styled-components'
import ShopBlock from './ShopBlock'
import DiscountBlock from './DiscontBlock'
import { discountData } from '../Data/MainData'
import BasketPlace from './BasketPlace'
import Articles from './Articles'
import { articlesData } from '../Data/ArticlesData'

const OrderPlace = () => {
  return (
    <OrderContainer> 
      <BasketPlace/>
      <ShopBlock />      
      <DiscountBlock discountData={discountData} />    
      <Articles articlesData={articlesData}/>
    </OrderContainer>
  )
}

export default OrderPlace

const OrderContainer = styled.div`
width:80%;
position:relative;
overflow: hidden;
`;
