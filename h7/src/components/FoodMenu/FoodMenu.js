import React from 'react'
import styled from 'styled-components'
import { foodData } from '../Data/FoodData'
import FoodMenuItem from './FoodMenuItem'


const FoodMenu = () => {
  return (
    <MenuList>
          {foodData.map(({ id, title, src }) => (
              <FoodMenuItem
                  key={id}
                  title={title}
                  src={src}
              />
            
          ))}
    </MenuList>
  )
}

export default FoodMenu

const MenuList = styled.ul`
    display:flex;
    margin-left:60px;
    margin-top:28px;
    text-align:center;

    li:not(:last-child){
        margin-right:12px;
    }
`;