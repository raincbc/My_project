import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import FormBtn from '../Form/FormBtn'
import {auth} from '../../base'
import { signOut as out } from 'firebase/auth'
import UserInfo from './UserInfo'
import MainMenu from './MainMenu'
import { userData } from '../../data/MainData'

const SettingsPlace = () => {
  const { setCurrentUser, menu, currentUser } = useContext(FoodContext);
  const navigate = useNavigate();

  const signOut = async (event) => {
    await out(auth);

    setCurrentUser(null);

    localStorage.setItem('user',  JSON.stringify(null));

    navigate('/')
  }
  return (
    <MainWrapper>
      <MenuContainer>
          <UserInfo
              userPhoto={userData.photo}
              user={currentUser}
          />
          <MainMenu menu={menu} />
      </MenuContainer>
      <MainContentWrapper>
      <Container>
      <h1>Settings</h1>
      <FormBtn
        btnText={'Logout'}
        onClick={signOut}
        type={'button'}
      />
    </Container>
      </MainContentWrapper>
  </MainWrapper>
  )
}

export default SettingsPlace

const Container = styled.div`
    margin:30px auto 0;
    text-align:center;
`;

const MainWrapper = styled.section`
    display:flex;
    overflow: hidden;
    justify-content:space-between;

    @media (max-width: 768px) {
        display:block;
    }
`;

const MenuContainer = styled.nav`
    height:100vh;

    @media (max-width: 768px) {
        height:60px;
        background-color:white;
        margin:10px 10px 0;
        border-radius:15px 15px 0 0;
        overflow:hidden;
        width:97%;
    }
`;

const MainContentWrapper = styled.div`
    margin: 20px 20px 0 0;
    border-radius: 35px;
    background-color:white;
    height:710px;
    display:flex;
    width:100%;

    @media (max-width: 1280px) {
        margin: 10px 10px 0 0;
        height:645px;
    }

    @media (max-width: 1024px) {
        width:80%;
    }

    @media (max-width: 768px) {
        width:97%;
        margin:0 10px;
        height:585px;
        border-radius: 0 0 15px 15px;
        overflow:hidden;
        display:block
    }

    @media (max-width: 400px) {
        height:650px;
    }
`;
