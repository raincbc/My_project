import React, { useContext } from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { userData } from "../../data/MainData";
import MainMenu from "./MainMenu";
import Delivery from "./Delivery";
import { deliveryData } from "../../data/MainData";
import HomePlace from "./HomePlace";
import { FoodContext } from "../../context/context";
import Fade from 'react-reveal/Fade';

const MainContent = () => {
    const { currentUser, menu } = useContext(FoodContext);

    return (
        <Fade right>
            <MainWrapper>
                <MenuContainer>
                    <UserInfo
                        userPhoto={userData.photo}
                        user={currentUser}
                    />
                    <MainMenu menu={menu} />
                    <Delivery deliveryData={deliveryData} />
                </MenuContainer>
                <MainContentWrapper>
                    <HomePlace/>
                </MainContentWrapper>
            </MainWrapper>
        </Fade>
    )
}

export default MainContent;

const MainWrapper = styled.section`
    display:flex;
    overflow: hidden;
    justify-content:space-between;

    @media (max-width: 768px) {
        display:block;
    }
`;

const MenuContainer = styled.nav`
    height:100vh;

    @media (max-width: 768px) {
        height:60px;
        background-color:white;
        margin:10px 10px 0;
        border-radius:15px 15px 0 0;
        overflow:hidden;
        width:97%;
    }
`;

const MainContentWrapper = styled.div`
    margin: 20px 20px 0 0;
    border-radius: 35px;
    background-color:white;
    height:710px;
    display:flex;
    width:100%;

    @media (max-width: 1280px) {
        margin: 10px 10px 0 0;
        height:645px;
    }

    @media (max-width: 1024px) {
        width:80%;
    }

    @media (max-width: 768px) {
        width:97%;
        margin:0 10px;
        height:585px;
        border-radius: 0 0 15px 15px;
        overflow:hidden;
        display:block
    }

    @media (max-width: 400px) {
        height:650px;
    }
`;


