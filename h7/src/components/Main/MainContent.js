import React, { useContext } from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { userData } from "../Data/MainData";
import MainMenu from "./MainMenu";
import Delivery from "./Delivery";
import { deliveryData } from "../Data/MainData";
import HomePlace from "./HomePlace";
import { FoodContext } from "../../context/context";
import MenuPlace from './MenuPlace';
import TrendingPlace from './TrendingPlace';
import SettingsPlace from './SettingsPlace'
import Fade from 'react-reveal/Fade';

const MainContent = () => {
    const { isActiveMainMenu, currentUser, menu } = useContext(FoodContext)

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
                    {isActiveMainMenu.type === 'home' ?
                        <HomePlace/> : <></>
                    }

                    {isActiveMainMenu.type === 'menu' ?
                        <MenuPlace/> : <></>
                    }

                    {isActiveMainMenu.type === 'trending' ?
                        <TrendingPlace/> : <></>
                    }

                    {isActiveMainMenu.type === 'settings' ?
                        <SettingsPlace/> : <></>
                    }
                
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

        ul{
            // position:absolute;
            // z-index:10;
            // background-color:white;
            // width:95%;
            // ${props=>props.menu ? 'top:-5px; transition:0.5s;' : 'top:-700px; transition:0.5s;'};
            // left:0;
            // height:99%;
            // border-radius:0 0 15px 15px;

            li{
                margin:30px auto;
                border:1px solid #919191;
            }
        }
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
        width:95%;
        margin:0 10px;
        height:585px;
        border-radius: 0 0 15px 15px;
        overflow:hidden;
    }
`;


