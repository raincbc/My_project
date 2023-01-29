import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { foodData } from '../Data/FoodData'
import FoodMenuItem from './FoodMenuItem'
import { FoodContext } from '../../context/context'


const FoodMenu = () => {
  const [isActive, setIsActive] = useState(foodData[0]);
  const { setActiveMenu } = useContext(FoodContext)
  setActiveMenu(isActive);


  const changeActiveItem = (item) => {
    setIsActive(item);
  }

  return (
    <MenuList>
          {foodData.map((elem) => (
            <FoodMenuItem              
              key={elem.id}              
              title={elem.title}              
              src={elem.src}  
              isActive={isActive.id === elem.id ? isActive : null}
              changeActiveItem={()=>changeActiveItem(elem)}
            />            
          ))}
    </MenuList>
  )
}

export default FoodMenu

const MenuList = styled.ul`
  display:flex;
  margin-left:60px;
  margin-top:20px;
  text-align:center;
  margin-bottom: 20px;

    li:not(:last-child){
        margin-right:40px;
    }
  
    @media (max-width: 1280px) {
      margin-left:20px;
      margin-top:10px;

      li:not(:last-child){
        margin-right:10px;
      }
    }

    @media (max-width: 1024px) {
      margin-left:10px;

      li:not(:last-child){
        margin-right:5px;
      }
    }

    @media (max-width: 768px) {
      margin-left:20px;

      li:not(:last-child){
        margin-right:40px;
      }
    }

    @media (max-width: 700px) {

      li:not(:last-child){
        margin-right:30px;
      }
    }

    @media (max-width: 650px) {

      li:not(:last-child){
        margin-right:45px;
      }
    }

    @media (max-width: 600px) {

      li:not(:last-child){
        margin-right:35px;
      }
    }

    @media (max-width: 550px) {

      li:not(:last-child){
        margin-right:25px;
      }
    }

    @media (max-width: 500px) {

      li:not(:last-child){
        margin-right:15px;
      }
    }

    @media (max-width: 450px) {
      margin-left:10px;

      li:not(:last-child){
        margin-right:10px;
      }
    }

    @media (max-width: 400px) {
      margin-left:16px;
    }    
`;