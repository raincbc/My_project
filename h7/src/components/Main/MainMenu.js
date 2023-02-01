import React, { useContext, useEffect} from 'react'
import MainMenuItem from './MainMenuItem'
import { menuData } from '../../data/MainData'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import {useLocation, useNavigate } from 'react-router-dom'

const MainMenu = () => {
  const location = useLocation();
  const { isActiveMainMenu, setIsActiveMainMenu, menu, setMenu } = useContext(FoodContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsActiveMainMenu(menuData[0])

    menuData.map((elem) => {
      if (location.pathname && location.pathname === elem.nav) { 
        setIsActiveMainMenu(elem)
      }
    })
  }, [isActiveMainMenu])

  const changeActiveItem = (item) => {
      setMenu(false)
      navigate(item.nav)
  }

  return (
    <MenuList isMenu={menu}>
      {menuData.map((elem) => (   
        <MainMenuItem 
          key={elem.id} 
          id={elem.id}
          nav={elem.nav}
          title={elem.title}
          svgName={elem.svgName} 
          isActiveMainMenu={isActiveMainMenu.id===elem.id }
          changeActiveItem={() => changeActiveItem(elem)}
        />        
      ))}
    </MenuList>
  )
}

export default MainMenu

const MenuList = styled.ul`
  margin-top:30px;
  margin-left:35px;

  @media (max-width: 1280px) {
    margin-top:15px;
    margin-left:10px;
  }

  @media(max-width: 768px) {
    position:absolute;
    z-index:10;
    background-color:white;
    width:100%;
    ${props=>props.isMenu ? 'top:-5px; transition:0.5s;' : 'top:-750px; transition:0.5s;'};
    left:0;
    height:99%;
    border-radius:0 0 15px 15px;
    transition:0.5s;
  }
`;