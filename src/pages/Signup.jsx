import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from "react-redux"

import { login, signup } from '../store/actions/user.actions.js'

import { ImgUploader } from '../cmps/ImgUploader'
import { userService } from '../services/user'

export function Signup() {
    const [isSinged, setIsSinged] = useState(false)
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const navigate = useNavigate()

    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onLogin(credentials)
        setCredentials(userService.getEmptyCredentials())
        navigate('/')
    }

    function onLogin(credentials) {
        // try {
        const method = isSinged ? signup : login
        method(credentials)


        // .then(user => showSuccessMsg('Hello!'))
        // .catch(err => showErrorMsg('Error logging in'))
    }
    return (

        <div className='login-container-mobile'>
            <form className='form' method='dialog' onSubmit={handleSubmit}>
                {/* <h2>Create a new account</h2> */}
                <h2>Continue with your email</h2>
                {/* <p className='sign-in'>
                Already have an account? <span className='link'>Sign in</span>
            </p> */}
                <a href="#" onClick={() => setIsSinged(!isSinged)} className='sign-in'>
                    {!isSinged ?
                        'Don\'t have an account? join here' :
                        'Already have an account? sign in'
                    }
                </a >
                <label className='input-container'>
                    <p className='input-title'>Email or username</p>
                    <input type='text' onChange={handleChange} name='username' value={credentials.username} />
                </label>

                <div className={`model-end ${isSinged && 'nogap'}`}>
                    {isSinged && (
                        <label className='input-title'>
                            {' '}
                            <p className='modal-fullname'>

                                Fullname
                            </p>
                            <input
                                type='text'
                                name='fullname'
                                value={credentials.fullname}
                                // placeholder="Full name"
                                onChange={handleChange}
                                required
                            />
                        </label>
                    )}
                    <label className='input-container'>
                        <p className='input-title'>Password</p>
                        <input type='password' onChange={handleChange} name='password' className='input-pass' value={credentials.password} />
                    </label>
                    <div>
                        <button className='button' type='submit' >
                            Continue
                        </button>
                        <p className='small-txt'>
                            By joining, you agree to the gighub <span className='link'>Terms of Service</span> and to occasionally receive emails from us. Please read our <span className='link'>Privacy Policy</span> to learn how we use your personal data.
                        </p>
                    </div>

                </div>
            </form>
        </div>
    )
}