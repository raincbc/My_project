import { useForm } from 'react-hook-form'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
    email: Yup.string()
        .required('Enter email'),
    login: Yup.string()
        .max(15, 'Login must be shorted than 15 characters')
        .required('Enter login'),
    password: Yup.string()
        .min(6, 'Password should be longer than 6 characters')
        .max(25, 'Password should be shorted than 25 characters')
        .required('Enter password'),
})

const HookFormApp = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ({email, login, password}) => {
        console.log(email, login, password)

        reset({
            email: '',
            login: '',
            password: ''
        })
        
    }

    return (
        <div className='container'>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    {...register('email')}
                    placeholder='Email'
                />
                {errors.email && <div>{errors.email?.message}</div>}
                
                <input
                    type='text'
                    {...register('login')}
                    placeholder='Login'
                />
                {errors.login && <div>{errors.login?.message}</div>}

                <input
                    type='text'
                    {...register('password')}
                    placeholder='Password'
                />
                {errors.password && <div>{errors.password?.message}</div>}

                <button type="submit">Log in</button>
            </form>
        </div>
    )

}

export default HookFormApp;