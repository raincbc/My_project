import React from 'react'
import shop from '../../assets/shop.svg'
import search from '../../assets/search.svg'
import styled from 'styled-components'

const ShopBlock = () => {
  return (
    <ShopWrapper>
      <img src={search} />
      <img src={ shop }/>
    </ShopWrapper>
  )
}

export default ShopBlock

const ShopWrapper = styled.div`
  height:208px;

  img{

  }
`;