import React from 'react'
import styled from 'styled-components'
import * as Img from '../Data/FoodPhotos'

const FoodItem = ({ type, title, description, prise, src}) => {

  return (
      <Container>          
          <img src={Img[`${src}`]} alt='' />  
          <p>{title}</p>
          <span>{description}</span>
          <div>
              <span>${prise}</span>
          </div>
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
    margin-top:20px;

    img{
        max-width:150px;
        position:absolute;
        bottom:125px;
        left:20px;
    }

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
        margin:8px 0 10px 28px;
    } 

    span:last-child{
        font-weight: 800;
        font-size: 14px;
        line-height: 18px;
        margin-left:28px;
    } 

`;
