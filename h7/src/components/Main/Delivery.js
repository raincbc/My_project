import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components'
import { FoodContext } from '../../context/context';

const Delivery = ({ deliveryData }) => {
  const { src, title, text, link } = deliveryData;
  const {menu} = useContext(FoodContext)

  return (
    <DeliveryContent menu={menu}>
        <img src={src} alt=''/>
        <p>{title}</p>
        <div>
            <span>{text}</span>
            <img src={link} alt=''/>
        </div>
    </DeliveryContent>
  )
}

export default Delivery

const DeliveryContent = styled.div`
  width:184px;
  height: 162px;
  background: #FFFFFF;
  border-radius: 25px;
  margin-left:35px;
  margin-top:125px;
  position:relative;

  img:first-child{
    position:absolute;
    bottom:45px;
  }

  img:last-child{
    cursor:pointer;
  }

  p{
    margin-left:26px;
    padding-top:88px;
    width:88px;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
  }

  div{
    margin-left:28px;
    margin-top:12px;
    margin-right:28px;
    display:flex;
    justify-content:space-between;

    span:first-child{
      font-weight: 700;
      font-size: 10px;
      line-height: 11px;
    }
  }

  @media (max-width: 1280px) {
    margin-left:10px;
    width:150px;
    height: 150px;

    img:first-child{
      transform:scale(0.8);
      bottom:65px;
      left:-10px;
    }

    p{
      padding-top:50px;
    }
  }

  @media (max-width: 1024px) {
    width:117px;
    height: 130px;
    margin-top:175px;

    img:first-child{
      transform:scale(0.7);
      bottom:30px;
      left:-25px;
    }

    p{
      margin-left:20px;
    }

    div{
      margin-left:20px;
    }
  }

  @media (max-width: 768px) {
    position:absolute;
    z-index:10;
    right:144px;
    // top:280px;
    ${props => props.menu ? 'top:280px; transition:0.5s;' : 'top:-500px; transition:0.5s;'};
    border:1px solid #919191;
  }
`;