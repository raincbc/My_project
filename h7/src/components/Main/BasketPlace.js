import React, { useContext } from 'react'
import styled from 'styled-components'
import { FoodContext } from '../../context/context'
import BasketOrderItem from './BasketOrderItem'
import BasketCooked from './BasketCooked'
import Arrow from './Arrow'

const BasketPlace = () => {
    
    const { activeBasket, getActiveBasket, setSelectedFoodItem,
        selectedFoodItem, setChosenFoodElem, finishOrder,
        setFinishOrder, setSlideBasket } = useContext(FoodContext);
    
    const fullPrise = () => {
        let allPrice = 0;
        if (selectedFoodItem) {
            selectedFoodItem.forEach((element) => {
                allPrice += element.price * element.count
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

    const deleteItem = (id) => {        
        setSelectedFoodItem(selectedFoodItem.filter((elem) => elem.id !== id ));
    }

    const handleClick = () => {
        setSelectedFoodItem('')
        setChosenFoodElem(false)
        setFinishOrder(prevState => !prevState)
        setSlideBasket(false)
        if (finishOrder) {
            getActiveBasket(false)
            localStorage.setItem('chosenFood', null)
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
                            <Arrow/>                              
                        </span>                          
                    </BasketTitle>                      
                    <BasketOrder>                          
                            {selectedFoodItem ? (selectedFoodItem.map((elem) => (        
                            <BasketOrderItem                                  
                                key={elem.id}
                                id={elem.id}    
                                type={elem.type}
                                title={elem.title}
                                description={elem.description}
                                price={elem.count>1? +elem.price * elem.count : elem.price}
                                itemCount={elem.count}
                                deleteItem={deleteItem}
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

    @media (max-width: 1024px) {
        width:100%;
    }

    @media (max-width: 768px) {
        ${(props) => props.activeBasket ? 'right:; ' : 'right:-380px;'};
        padding:25px 15px 25px 10px;
        button{
            padding:8px 0;
            border-radius: 8px;
        }
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
    }

    @media (max-width: 768px) {
        span{
            width:30px;
            height:30px;
            border-radius: 8px;
        }

        p{
            font-size: 18px;
            line-height: 20px; 
        }
    }
`;
const BasketOrder = styled.div`
    height:80%;
    overflow:scroll;

    ::-webkit-scrollbar { width: 0; }
`;

