import React, { useState } from "react";
import styled from "styled-components";
import FoodMenu from "../FoodMenu/FoodMenu";
import Title from "../Form/Title";
import UserInfo from "./UserInfo";
import { userData } from "../Data/MainData";

const MainContent = () => {
console.log(userData)
    const[isActive, setIsActive] = useState('true')
    return (
        <MainWrapper>
            <MenuContainer>
                <UserInfo userData={userData} />
            </MenuContainer>
            <MainContentWrapper>
                <MainContentContainer>
                    <Title text={'Welcome To Lucknow'}/>
                </MainContentContainer>
                <FoodMenu/>
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
`;

const MainContentContainer = styled.div`
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