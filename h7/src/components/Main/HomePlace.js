import React from 'react'
import FoodMenu from '../FoodMenu/FoodMenu'
import Title from '../Form/Title'
import OrderPlace from './OrderPlace'
import FoodPlace from '../FoodMenu/FoodPlace'
import styled from 'styled-components'


const HomePlace = () => {
  return (
    <>       
        <div>
            <MainContentContainer>
                <Title text={'Welcome To Lucknow'}/>
            </MainContentContainer>
            <FoodMenu />
            <FoodPlace/>
        </div>
        <OrderPlace/>
    </>
  )
}

export default HomePlace

const MainContentContainer = styled.div`
    max-width: max-content;

    h1{
        text-align:start;
        margin-left:30px;
        padding-top:0;
        margin-top:25px;
    }

    img{
        right:73px;
        top:40px;
    }
`;