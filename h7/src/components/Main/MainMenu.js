import React, { useContext} from 'react'
import MainMenuItem from './MainMenuItem'
import { menuData } from '../Data/MainData'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'

const MainMenu = () => {
  const { isActiveMainMenu, getActiveMainMenu } = useContext(FoodContext)  

  const changeActiveItem = (item) => {
    getActiveMainMenu(item)
  }

  return (
    <MenuList>
      {menuData.map((elem) => (   
        <MainMenuItem 
          key={elem.id} 
          id={elem.id}
          title={elem.title}
          src={elem.src} 
          isActiveMainMenu={isActiveMainMenu.id===elem.id ? isActiveMainMenu : null}
          changeActiveItem={()=>changeActiveItem(elem)}
        />        
      ))}
    </MenuList>
  )
}

export default MainMenu

const MenuList = styled.ul`
  margin-top:30px;
  margin-left:35px;
`;