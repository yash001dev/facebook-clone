import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        //sgn in...
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result);
        })
        .catch(error=>alert(error.message));
    }
    return (
        
        <div class="Login">
            
            <div class="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
