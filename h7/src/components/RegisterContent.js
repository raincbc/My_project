import React from "react";
import { Container } from "./Styled/Styled";
import BgImages from "./BgImages";
import Form from "./Form/Form";
import Title from "./Form/Title";

const RegisterContent = () => {

    return (
        <Container >
            <BgImages />
            <Title text={ "Welcome To Yelp App" } />
            <Form
                btnText={'Register'}
                nav={'/'}
            />
        </Container>
    )
}

export default RegisterContent;