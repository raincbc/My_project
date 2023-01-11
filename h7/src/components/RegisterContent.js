import React from "react";
import { Container } from "./Styled/Styled";
import BgImages from "./BgImages";
import Form from "./Form/Form";
import Title from "./Form/Title";
import { useNavigate } from "react-router-dom";

const RegisterContent = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        // navigate('/main')
    }
    return (
        <Container >
            <BgImages />
            <Title text={ "Welcome To Yelp App" } />
            <Form
                btnText={'Register'}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
}

export default RegisterContent;