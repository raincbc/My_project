import React, { useState } from 'react'
import MainMenuItem from './MainMenuItem'
import { menuData } from '../Data/MainData'
import styled from 'styled-components'

const MainMenu = () => {
  const [isActive, setIsActive] = useState(menuData[0]);

  const changeActiveItem = (item) => {
    setIsActive(item)
  }

  return (
    <MenuList>
      {menuData.map((elem) => (   
        <MainMenuItem 
          key={elem.id} 
          id={elem.id}
          title={elem.title}
          src={elem.src} 
          isActive={isActive.id===elem.id ? isActive : null}
          changeActiveItem={()=>changeActiveItem(elem)}
        />        
      ))}
    </MenuList>
  )
}

export default MainMenu

const MenuList = styled.ul`
  margin-top:57px;
  margin-left:35px;
`;