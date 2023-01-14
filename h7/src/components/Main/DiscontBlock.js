import React from 'react'
import styled from 'styled-components';

const DiscountBlock = ({ discountData }) => {
    const { src, title, text } = discountData;
  return (
      <DiscountWrapper>
          <img src={src} />  
          <p>{title}</p>
          <span>{text}</span>
      </DiscountWrapper>
      
  )
}

export default DiscountBlock

const DiscountWrapper = styled.div`
    position:relative;
    background: #AB97F3;
    border-radius: 30px;
    height:160px;
    width:260px;
    margin-left:50px;

    img{
        position:absolute;
        bottom:-5px;
        left:25px;
    }

    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 27px;
        color:white;
        padding-top:77px;
        margin-left:22px;
        margin-bottom:7px;
        cursor:pointer;
    }

    span{
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color:white;
        margin-left:22px;
    }
`;