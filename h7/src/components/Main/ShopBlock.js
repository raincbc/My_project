import React, { useContext } from 'react'
import shop from '../../assets/shop.svg'
import search from '../../assets/search.svg'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'

const ShopBlock = () => {
  const { activeBasket, getActiveBasket} = useContext(FoodContext);

  const handleBasket = () => {
      getActiveBasket(true)
  }
  return (
    <ShopWrapper>
      <img src={search} alt=''/>
      <img
        src={shop}
        alt=''
        onClick={handleBasket}
        activeBasket={activeBasket}
      />
    </ShopWrapper>
  )
}

export default ShopBlock

const ShopWrapper = styled.div`
  height:150px;
  display:flex;
  justify-content: end;
  align-items: flex-start;

  img{
    display:block;
    margin-top:30px;
    cursor:pointer;  
    z-index:2;
  }

  img:last-child{
    margin-right:30px;
  }

  img:first-child{
    margin-right:20px;
  }

  @media (max-width: 1280px) {
    height:135px;

    img{
      margin-top:15px;
    }
  }

  @media (max-width: 1024px) {
    height:115px;

    img{
      width:30px;
      margin-top:25px;
    }

    img:last-child{
      margin-right:50px;
    }
  }
`;