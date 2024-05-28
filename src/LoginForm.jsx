import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='login-form'>
        <div className="formLogin">
            <form action=''>
                <h1>Login</h1>
                <div className='user-Input'>
                    <input type="text"
                    placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>

                <div className='user-Input'>
                    <input type="password"
                    placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type="checkbox" />Remember Me</label>
                    <a href='#'>Forgot password</a>
                </div>

                <button type='submit'>Login</button>
                <div className="register-form">
                    <p>Don't have an account?
                    <a href="#">Register</a></p>

                </div>


            </form>

        </div>
    </div>
  )
}

export default LoginForm