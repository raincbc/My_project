import React from 'react'
import styled from 'styled-components'
import * as Img from '../../data/FoodPhotos'
import plus from '../../assets/plus.svg'
import bird from '../../assets/bird.svg'

const FoodItem = ({ title, description, prise, src, handleClick, chosenFoodElem}) => {

    return (
      <Container chosenFoodElem={chosenFoodElem}>          
          <FoodImg src={Img[`${src}`]} alt=''/>  
          <p>{title}</p>
          <span>{description}</span>
          <PriceMenu>
              <span>${prise}</span>
                <Plus
                    onClick={handleClick}
                    src={chosenFoodElem ? bird : plus} />
          </PriceMenu>
      </Container>      
  )
}

export default FoodItem

const Container = styled.div`
    display:inline-block;
    position:relative;
    width:200px;
    margin-left:60px;
    border: 1px solid #F2EEEE;
    border-radius: 30px;
    height:180px;
    margin-bottom:100px;
    margin-top:15px;
    background-color: ${(props) => props.chosenFoodElem ? '#F2EEEE': 'white'};

    p{
        font-weight: 800;
        font-size: 14px;
        line-height: 13px;
        margin-top:60px;
        margin-left:28px;
    }

    &>span{
        display:block;
        font-weight: 600;
        font-size: 10px;
        line-height: 18px;
        color: #898686;
        width:130px;
        height:65px;
        margin:8px 0 10px 28px;
    } 

    @media (max-width: 1280px) {
        margin-left:20px;
        margin-bottom:80px;
        width:170px;

        &>span{
            margin:8px 0 10px 18px;
        }

        p{
            margin-left:18px;
        }
    }

    @media (max-width: 1024px) {
        margin-left:10px;
    }

    @media (max-width: 768px) {
        margin-bottom:50px;
        width:165px;
        height:170px;

        p{
            margin-top:40px;
        }

        &>span{
            line-height: 12px;
        }
    }

    @media (max-width: 550px) {
        margin-left:30px;
    }

    @media (max-width: 450px) {
        margin-left:15px;
    }

    @media (max-width: 400px) {
        margin-left:8px;
    }
`;

const PriceMenu = styled.div`
    position:relative;

    span{
        font-weight: 800;
        font-size: 14px;
        line-height: 18px;
        margin-left:28px;
    } 

    @media (max-width: 1280px) {
        span{
            margin-left:18px;
        }
    }
`;

const FoodImg = styled.img`
    max-width:150px;
    position:absolute;
    bottom:125px;
    left:20px;

    @media (max-width: 1280px) {
        transform:scale(0.8);
    }

    @media (max-width: 768px) {
        transform:scale(0.5);
        left:10px;
        bottom:105px;
    }
`;

const Plus = styled.img`
    position:absolute;
    right:17px;
    top:-20px;
    cursor:pointer;

    @media (max-width: 1280px) {
        transform:scale(0.8);
        top:-10px;
    }
`;