import React from "react";
import styled from "styled-components";
import FoodMenu from "../FoodMenu/FoodMenu";
import Title from "../Form/Title";
import UserInfo from "./UserInfo";
import { userData } from "../Data/MainData";
import MainMenu from "./MainMenu";
import Delivery from "./Delivery";
import { deliveryData } from "../Data/MainData";
import OrderPlace from "./OrderPlace";

const MainContent = () => {
    console.log(deliveryData)
    return (
        <MainWrapper>
            <MenuContainer>
                <UserInfo userData={userData} />
                <MainMenu />
                <Delivery deliveryData={deliveryData} />
            </MenuContainer>
            <MainContentWrapper>
                <div>
                    <MainContentContainer>
                        <Title text={'Welcome To Lucknow'}/>
                    </MainContentContainer>
                    <FoodMenu />
                </div>
                <OrderPlace/>
            </MainContentWrapper>
        </MainWrapper>
    )
}

export default MainContent;

const MainWrapper = styled.section`
    display:flex;
`;

const MenuContainer = styled.nav`
    height:100vh;
`;

const MainContentWrapper = styled.div`
    margin: 53px 65px 53px 0;
    border-radius: 35px;
    background-color:white;
    width: 100%;
    height:797px;
    display:flex;
`;

const MainContentContainer = styled.div`
    max-width: max-content;

    h1{
        text-align:start;
        margin-left:60px;
        padding-top:0;
        margin-top:50px;
    }

    img{
        right:73px;
        top:63px;
    }
`;