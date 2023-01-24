import React from 'react'
import FoodMenu from '../FoodMenu/FoodMenu'
import Title from '../Form/Title'
import OrderPlace from './OrderPlace'
import FoodPlace from '../FoodMenu/FoodPlace'
import styled from 'styled-components'
import BasketPlace from './BasketPlace'

const HomePlace = () => {
  return (
    <>       
        <div>
            <HideBasket>
                <BasketPlace/>
            </HideBasket>
            <MainContentContainer>
                  <Title text={'Welcome To Lucknow'} />
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

    @media (max-width: 1280px) {
        img{
            right:60px;
        }
    }

    @media (max-width: 1024px) {
        h1{
            margin-left:20px;
        }
        img{
            top:35px;
        }

    }
    
    @media (max-width: 768px) {
        margin:0 auto;

        h1{
            font-size:26px;
            line-height: 30px;
            padding-left:20px;
            margin-top:10px;
        }

        img{
            width:30px;
            top:25px;
            right:70px;
        }
    }
`;

const HideBasket = styled.div`
  display:none;
  overflow:hidden;

  @media (max-width: 768px){
      display:block;
      position:absolute;
      width:50%;
      height:95%;
      top:29px;
      right:10px;
  }
    
`;