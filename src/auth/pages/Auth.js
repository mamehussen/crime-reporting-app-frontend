import React from 'react'
import { useState, useContext } from 'react';

import TopBar from '../../shared/components/Navigation/TopBar';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './Auth.css';

import {useForm} from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';

const Auth = () => {
    const auth = useContext(AuthContext)
    const [isLoginMode, setIsLoginMode] = useState(true); 

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false 
        },
        password: {
            value: '',
            isValid: false
        }
    },
     false
     );

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                ...formState.inputs,
                name: undefined
            }, 
            formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, 
            false
            )
        }
        setIsLoginMode(prevMode => !prevMode);

    }

    const authSubmitHandler = async event => {
        event.preventDefault();

        if (isLoginMode) {
          try {
            const response = await fetch('https://crime-reporting-app-api.herokuapp.com/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.email.value
          })
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error (responseData.message);
        }
        console.log(responseData)
        auth.login()
            
          } catch (err) {
            console.log(err);
          }

        } 
        else
         {
          try {
            const response = await fetch('https://crime-reporting-app-api.herokuapp.com/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.email.value
          })
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error (responseData.message);
        }
        console.log(responseData)
        auth.login()
            
          } catch (err) {
            console.log(err);
          }
          
        }
     
    }

    return (
    <div>
        <TopBar />
    <div className="form-container outer">
  <div className="form-form">
    <div className="form-form-wrap">
      <div className="form-container">
        <div className="form-content">
          <h1 className>{isLoginMode ? 'Sign In' : 'Sign Up'}</h1>
          <p className>{isLoginMode ? 'Log in to your account to continue.' : 'Register a new account'}</p>

          <form className="text-left" onSubmit={authSubmitHandler}>
            <div className="form">
                {!isLoginMode && (
                <Input  
                element="input"
                id="name"
                type="text"
                label="Your Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter a name."
                onInput={inputHandler}
                /> 
                )}

              <div id="email-field" className="field-wrapper input">
                <label htmlFor="email">EMAIL</label>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign register"><circle cx={12} cy={12} r={4} /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></svg>
                <Input id="email" 
                element="input" 
                type="email" 
                defaultValue 
                className="form-control" 
                placeholder="Email" 
                validators={[VALIDATOR_EMAIL()]}
                errorText = "Please enter a valid email address"
                onInput={inputHandler}
                 />
              </div>

              <div id="password-field" className="field-wrapper input mb-2">
                <div className="d-flex justify-content-between">
                  <label htmlFor="password">PASSWORD</label>
                </div>
                
                <Input 
                id="password" 
                element="input" 
                type="password" 
                defaultValue 
                className="form-control" 
                placeholder="Password" 
                validators={[VALIDATOR_REQUIRE()]}
                errorText = "Please enter Password"
                onInput={inputHandler}
                 />
              </div>

              <div className="d-sm-flex justify-content-between">
                <div className="field-wrapper">
                  <button type="submit" className="btn btn-primary" disabled={!formState.isValid}>{isLoginMode ? 'LOGIN' : 'REGISTER'}</button>
                </div>


              </div>
              <p className="signup-link">SWITCH TO <a href onClick={switchModeHandler}>{isLoginMode ? 'SIGNUP' : 'LOGIN'}</a></p>
            </div>
          </form>


        </div>                    
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Auth;