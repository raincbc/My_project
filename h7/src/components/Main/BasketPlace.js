import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow.svg'
import { FoodContext } from '../../context/context'
import BasketOrderItem from './BasketOrderItem'
import BasketCooked from './BasketCooked'

const BasketPlace = () => {
    

    const { activeBasket, getActiveBasket, setSelectedFoodItem,
        selectedFoodItem, setChosenFoodElem, finishOrder,
        setFinishOrder } = useContext(FoodContext);
    
    const fullPrise = () => {
        let allPrice = 0;
        if (selectedFoodItem) {
            selectedFoodItem.forEach((element) => {
                if (element.count > 1) {
                    allPrice += element.price * element.count
                } else {
                    allPrice += parseInt(element.price)
                }
            });
        } else {
            setSelectedFoodItem('')
        }
        return allPrice
    }
    
    const handleHide = () => {
        getActiveBasket(false);
        setChosenFoodElem(false)
    }

    const handleClick = () => {
        setSelectedFoodItem('')
        setChosenFoodElem(false)
        setFinishOrder(prevState => !prevState)
        if (finishOrder) {
            getActiveBasket(false)
        }
    }

    return (
        <Container
          activeBasket={activeBasket}
          finishOrder={finishOrder}
        >
          <>
            {!finishOrder ?                  
                <>        
                    <BasketTitle>                          
                        <p>Basket</p>                          
                        <span onClick={handleHide}>                              
                            <img src={arrow} alt='' />                              
                        </span>                          
                    </BasketTitle>                      
                    <BasketOrder>                          
                          {selectedFoodItem ? (selectedFoodItem.map((elem) => (                  
                            <BasketOrderItem                                  
                                key={elem.id}                                  
                                type={elem.type}
                                title={elem.title}
                                description={elem.description}
                                price={elem.count>1? +elem.price * elem.count : elem.price}
                                itemCount={elem.count}
                            />                              
                        ))) : ''}                          
                    </BasketOrder></>                  
                : <BasketCooked />}              
          </>          
          <button onClick={handleClick}>{!finishOrder ? 'Order - $' +fullPrise() : 'Order more'}</button>
    </Container>
  )
}

export default BasketPlace

const Container = styled.div`
    width:70%;
    height:91%;
    right:${(props) => props.activeBasket ? '0' : '-415px'};
    top:30px;
    box-shadow: ${(props) => props.activeBasket ? '0px 4px 46px rgba(0, 0, 0, 0.2)' :'0'};
    border-radius: 30px 0px 0px 30px;
    position:absolute;
    background-color:white;
    z-index:5;
    padding:25px 15px 25px 25px;
    box-sizing:border-box;
    transition:1s;

    button{
        border:none;
        background: #2D9CDB;
        border-radius: 15px;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        color:white;
        width:100%;
        padding:16px 0;
        cursor:pointer;
    }
`;
const BasketTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:22px;

    p{
        font-weight: 800;
        font-size: 30px;
        line-height: 34px;  
    }

    span{
        background: #F5F6F7;
        border-radius: 15px;
        width:46px;
        height:46px;
        cursor:pointer;

        img{
            display:block;
            margin:50% auto;
            transform:translate(0, -50%)
        }
    }
`;
const BasketOrder = styled.div`
    height:80%;
    overflow:scroll;

    ::-webkit-scrollbar { width: 0; }
`;

