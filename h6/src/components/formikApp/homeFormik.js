import { useFormik } from "formik";
import * as Yup from 'yup';

const InputsApp = () => {
    const { handleSubmit, handleChange, values, touched, errors, handleBlur, resetForm } = useFormik({
        initialValues: {
            email:'',
            login:'',
            password:'',
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required('Enter email'),
            
            login: Yup.string()
                .max(15, 'Login must be shorted than 15 characters')
                .required('Enter login'),

            password: Yup.string()
                .min(6, 'Password should be longer than 6 characters')
                .max(25, 'Password should be shorted than 25 characters')
                .required('Enter password')            
        }),

        onSubmit: (values) => {
            console.log(values)
            resetForm();
        }
    })

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    name='email'
                    placeholder='Your email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email ? 
                <div>{errors.email}</div>
                    : null}
                
                <input
                    name='login'
                    placeholder='Your login'
                    value={values.login}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.login && errors.login ? 
                <div>{errors.login}</div>
                : null}

                <input
                    name='password'
                    placeholder='Your password'
                    value={values.password}
                    onChange={handleChange}
                    type={'password'}
                    onBlur={handleBlur}
                />
                {touched.password && errors.password ? 
                <div>{errors.password}</div>
                : null}

                <button>Submit</button>
            </form>
        </div>
    )

}

export default InputsApp;