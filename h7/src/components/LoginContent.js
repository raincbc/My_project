import React from "react";
import Title from "./Form/Title"
import BgImages from "./BgImages"
import { Container } from "./Styled/Styled";
import Form from "./Form/Form";

const LoginContent = () => {
    return (
        <Container >
            <BgImages />
            <Title text={ "Welcome To Yelp App" } />
            <Form
                btnText={'Login'}
            />
        </Container>
    )
};

export default LoginContent;

