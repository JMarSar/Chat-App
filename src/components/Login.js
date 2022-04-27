import React from 'react'
import { GoogleOutlined } from "@ant-design/icons"

import firebase from '../firebase'

export const auth = firebase.auth();

function Login() {
  return (
    <div id="login-page">
        <div id='login-card'>
            <h2>Welcome to FChat!</h2>
            <div 
                className='login-button google'
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <GoogleOutlined /> Sign In wih Google
            </div>
        </div>
    </div>
  )
}

export default Login