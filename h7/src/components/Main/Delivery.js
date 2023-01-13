import React from 'react'
import styled from 'styled-components'

const Delivery = ({ deliveryData }) => {
    const{src, title, text, link} = deliveryData;
    console.log(src)
  return (
    <DeliveryContent>
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
`;