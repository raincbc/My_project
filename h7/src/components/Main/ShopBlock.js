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
  display:flex;
  justify-content: end;
  align-items: flex-start;

  img{
    display:block;
    margin-top:50px;
    cursor:pointer;  
    z-index:2;
  }

  img:last-child{
    margin-right:10px;
  }

  img:first-child{
    margin-right:20px;
  }
`;