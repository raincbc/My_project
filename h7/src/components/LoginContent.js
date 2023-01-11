import React from "react";
import Title from "./Form/Title"
import BgImages from "./BgImages"
import { Container } from "./Styled/Styled";
import Form from "./Form/Form";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'

const LoginContent = () => {
    const navigate = useNavigate();

    const { handleSubmit, handleChange, values, touched, errors } = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: Yup.object({
            login: Yup
                .string()
                .max(15, 'Login must be shorted then 15 characters')
                .required('Do not enter login'),
            password: Yup
                .string()
                .min(6, 'Password should be longer then 6 characters')
                .required('Do not enter password')
        }),

        onSubmit: (values) => {
            console.log(values)
            // navigate('/main')
        }
    })

    return (
        <Container >
            <BgImages />
            <Title text={ "Welcome To Yelp App" } />
            <Form
                btnText={'Login'}
                onSubmit={handleSubmit}
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
            />
        </Container>
    )
};

export default LoginContent;

