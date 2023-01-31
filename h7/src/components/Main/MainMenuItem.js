import styled from "styled-components"
import { MenuIcon } from "./MenuIcon"

const MainMenuItem = ({ title, svgName, changeActiveItem, isActiveMainMenu, nav }) => {

  return (
    <MenuListItem
      isActiveMainMenu={isActiveMainMenu}
      onClick={changeActiveItem}
      nav={nav}
    >
      <div>
        <MenuIcon
          name={svgName}
          stroke={isActiveMainMenu ? 'white' : '#919191'}
          color={'#FF5454'}
        />
      </div>
      <p>{title}</p>
    </MenuListItem>
  )
}

export default MainMenuItem

const MenuListItem = styled.li`
  display:flex;
  align-items:center;
  width:185px;
  border-radius:15px;
  background-color:${(props)=>props.isActiveMainMenu ? '#FF5454' : 'white'};
  cursor:pointer;

  :not(:last-child){
    margin-bottom:31px;
  }

  div:first-child{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width: 46px;
    height: 44px;
    background-color:${(props)=>props.isActiveMainMenu ? '#DF4545' : 'white'};
    border-radius:15px;
    margin-right:25px;

    img{
      display:inline-block;      
    }
  }

  p{
    width:50%;
    text-align:center;
    color:${(props)=>props.isActiveMainMenu ? 'white' : '#919191'};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: 1280px) {
    width:150px;

    :not(:last-child){
      margin-bottom:15px;
    }

    p{
      width:30%;
    }
  }

  @media (max-width: 1024px) {
    width:120px;
    text-align:start;

    div:first-child{
      margin-right:10px
    }
  }

  @media(max-width: 768px) {
    margin:30px auto;
    border:${(props)=>props.isActiveMainMenu ? 'none' : '1px solid  #919191'};
  }
  
`;
