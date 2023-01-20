import * as Yup from 'yup'
export const formData = [
    {
        id: '1',
        title: 'Login',
        placeholder: 'John', 
        name: 'login',
        type: 'login'
    },

    {
        id: '2',
        title: 'Password',
        placeholder: '***************',
        name: 'password',
        type: 'password'
    },

    {
        id: '3',
        title: 'Confirm password',
        placeholder: '***************',
        name: 'confirmPassword',
        type: 'password'
    },
]

export const loginValidationSchema =  {
    login: Yup
        .string()
        .min(5, 'Login should be longer then 5 characters')
        .max(15, 'Login must be shorted then 15 characters')
        .required('Do not enter login'),
    password: Yup
        .string()
        .min(6, 'Password should be longer then 6 characters')
        .required('Do not enter password'),
}

export const passwordValidationSchema =  {
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Do not enter confirm password')
}