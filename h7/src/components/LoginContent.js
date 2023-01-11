import React from "react";
import Title from "./Form/Title"
import BgImages from "./BgImages"
import { Container } from "./Styled/Styled";
import Form from "./Form/Form";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/main')
    }

    return (
        <Container >
            <BgImages />
            <Title text={ "Welcome To Yelp App" } />
            <Form
                btnText={'Login'}
                handleSubmit={handleSubmit}
            />
        </Container>
    )
};

export default LoginContent;

