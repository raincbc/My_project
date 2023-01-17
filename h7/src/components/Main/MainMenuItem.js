import styled from "styled-components"

const MainMenuItem = ({ title, src, changeActiveItem, isActiveMainMenu}) => {

  return (
    <MenuListItem
      isActiveMainMenu={isActiveMainMenu}
      onClick={changeActiveItem}
    >
      <div>
        <img src={src} />
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
      stroke:black;
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
  
`;
