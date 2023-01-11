import React from "react";
import { Container } from "./Styled/Styled";
import BgImages from "./BgImages";
import Form from "./Form/Form";
import Title from "./Form/Title";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const RegisterContent = () => {
    const navigate = useNavigate();
    
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            login: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: (values) => {
            console.log(values)
            // navigate('/')
        }
    })

    return (
        <Container >
            <BgImages />
            <Title text={ "Welcome To Yelp App" } />
            <Form
                btnText={'Register'}
                onSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
            />
        </Container>
    )
}

export default RegisterContent;