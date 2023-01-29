import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import FormBtn from '../Form/FormBtn'
import app from '../../base'
import { getAuth, signOut as out } from 'firebase/auth'

const SettingsPlace = () => {
  const { setCurrentUser } = useContext(FoodContext);
  const navigate = useNavigate();
  const auth = getAuth

  const signOut = async (event) => {
    await out(auth);

    setCurrentUser(null);

    localStorage.setItem('user',  JSON.stringify(null));

    navigate('/')
  }
  return (
    <Container>
      <h1>Settings</h1>
      <FormBtn
        btnText={'Logout'}
        onClick={signOut}
      />
    </Container>
  )
}

export default SettingsPlace

const Container = styled.div`
    margin:30px auto 0;
    text-align:center;
`;