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
    height:145px;
    width:260px;
    margin-left:90px;

    img{
        position:absolute;
        bottom:-23px;
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

    @media (max-width: 1280px) {
        margin-left:20px;
        height:130px;

        img{
            transform:scale(0.8);
        }

        p{
            padding-top:50px;
        }
    }

    @media (max-width: 1024px) {
        margin-left:10px;
        height:100px;
        width:200px;
    }

    img{
        transform:scale(0.6);
        left:-15px;
        bottom:-65px;
    }
`;