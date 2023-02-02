import styled from "styled-components"
import ShopBlock from "./ShopBlock"
import { useContext } from "react"
import { FoodContext } from "../../context/context"

const UserInfo = ({ userPhoto, user }) => {
  const {menu, setMenu} = useContext(FoodContext);

  const openMenu = () => {
    setMenu(prevState => !prevState);
  }

  return (
    <UserContainer>
      <UserLogo>
        <img src={userPhoto} alt=''/>
      </UserLogo>
      <p>{user}</p>
      <HideMenuBlock>
        <>
          <ShopBlock/>
        </>
        <HideMenu isMenu={menu} onClick={openMenu}>
          <Span isMenu={menu}/>
          <Span isMenu={menu}/>
          <Span isMenu={menu}/>
        </HideMenu>
      </HideMenuBlock>
    </UserContainer>
  )
}

export default UserInfo

const Span = styled.span``;

const UserContainer = styled.div`
    margin-top:35px;
    margin-left:97px;
    margin-right:77px;
    text-align:center;

    p{
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        margin-top:13px;
    }

    @media (max-width: 1280px) {
      margin-top:15px;
      margin-left:40px;
      margin-right:40px;
    }

    @media (max-width: 1024px){
      margin-top:10px;
      margin-left:20px;
      margin-right:20px;
    }

    @media (max-width: 768px){
      margin-left:10px;
      margin-right:0;
      text-align:start;
      display:flex;
      align-items:center;
      margin-top:5px;

      p{
        font-size: 10px;
        line-height: 16px;
        margin-top:5px;
        margin-right:350px;
      }
    }

    @media (max-width: 700px){
      p{
        margin-right:300px;
      }
    }

    @media (max-width: 700px){
      p{
        margin-right:250px;
      }
    }

    @media (max-width: 650px){
      p{
        margin-right:200px;
      }
    }

    @media (max-width: 600px){
      p{
        margin-right:170px;
      }
    }

    @media (max-width: 500px){
      p{
        margin-right:auto;
      }
    }

    @media (max-width: 400px){
      padding-right:20px;

      p{
        margin-right:45px;
      }
    }

    @media (max-width: 370px){
      p{
        margin-right:50px;
      }
     
`;

const UserLogo = styled.div`
    background-color:white;
    max-width:max-content;
    padding:8px;
    border-radius: 15px;
    margin:0 auto;

    img{
        display:block;
        width:60px;
        height:60px;
    }

    @media (max-width: 1024px){
      img{
        width:50px;
        height:50px;
      }
    }

    @media (max-width: 768px){
      margin-left:0;
      width:30px;
      height:30px;
      border: 1px solid black;

      img{
        width:30px;
        height:30px;
      }
    }
`;

const HideMenuBlock = styled.div`
  display:none;

  @media (max-width: 768px){
    display:block;
    width:30%;
    display:flex;
    align-items:center;

    div:first-child{
      height:60px;
      width:100px;
      
      
      img{
        margin-top:15px;
        margin-right:20px;
      }

      img:first-child{
        display:none;
      }
    }
  }

  @media (max-width: 500px){
    width:40%;
  }
`;

const HideMenu = styled.div`
  display:none;
  height:30px;
  width:30px;
  margin:0 auto;
  cursor-pointer;
  z-index:20;
  position:relative;

  @media (max-width: 768px){
    display:block;

    span:first-child{
      ${props => props.isMenu ? 'top:11px;' : 'top:8px;'};
      ${props => props.isMenu ? 'transform:rotate(45deg); transition:500ms;' : 'transform:rotate(0); transition:500ms;'})
      z-index:16;
    }

    span:nth-child(2){
      top:14px;
      display:${props => props.isMenu ? 'none' : 'block'};
      z-index:16;
    }

    span{
      height:3px;
      width:30px;
      border-radius:4px;
      background-color:black;
      position:absolute;
      ${props => props.isMenu ? 'top:11px;' : 'top:20px;'};
      ${props => props.isMenu ? 'transform:rotate(-45deg); transition:500ms;' : 'transform:rotate(0); transition:500ms;'})
      transition:500ms;
      z-index:16;
    }
  }
`;
