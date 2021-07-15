import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = ({ history }) => {
    const [appUser, setAppUser] = useState({
        name: '',
        email: ''
    });

    const { name, email } = appUser;

    const handelSubmit = event => {
        event.preventDefault();

        alert(`User ${name} with email ${email} has successfully signed in!`);
        history.push('/');
    }

    const handelChange = (event) => {
        const {name, value} = event.target;
        setAppUser({...appUser, [name]: value})
    }
    
    return (  
        <div className='sign-in-container'>
            <h3>Sign-In</h3>
            <form className='sign-in-form' onSubmit={handelSubmit}>
                <FormInput 
                name='name'
                type='text'
                label='Name'
                value={name}
                onChange={handelChange}
                />
                <FormInput 
                name='email'
                type='email'
                label='Email'
                value={email}
                onChange={handelChange}
                />
                <CustomButton type='submit'>Sign-In</CustomButton>
            </form>
        </div>
    );
}

export default withRouter(SignIn);