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
    const { isActiveMainMenu, currentUser } = useContext(FoodContext)

    return (
        <Fade right>
            <MainWrapper>
                <MenuContainer>
                    <UserInfo
                        userPhoto={userData.photo}
                        user={currentUser}
                    />
                    <MainMenu />
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
`;

const MenuContainer = styled.nav`
    height:100vh;
`;

const MainContentWrapper = styled.div`
    margin: 20px 20px 0 0;
    border-radius: 35px;
    background-color:white;
    height:710px;
    display:flex;
    width:100%;
`;


