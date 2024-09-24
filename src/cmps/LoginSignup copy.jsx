import { useEffect, useState } from 'react'
import { userService } from '../services/user/index.js'
import { login, signup } from '../store/actions/user.actions.js'

export function LoginSignup({ elModal, onClose, isSignup, setIsSignUp }) {
    console.log("🚀 ~ LoginSignup ~ isSignup:", isSignup)
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())

    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        onLogin(credentials)
        setCredentials(userService.getEmptyCredentials())
    }


    function onLogin(credentials) {
        const method = !isSignup ? signup : login

        method(credentials)
    }

    function onCloseModal() {
        elModal.current.close()
        onClose()
    }
    return (
        <div className='login-container'>
            <form className='form' method='dialog' onSubmit={handleSubmit}>
                <h2>Create a new account</h2>
                <a href="#" onClick={() => setIsSignUp(!isSignup)}>
                    {isSignup ?
                        'Don\'t have an account? join here' :
                        'Already have an account? sign in'
                    }
                </a >
                <label className='input-container'>
                    <p className='input-title'>Email or username</p>
                    <input type='text' onChange={handleChange} name='username' placeholder='name@email.com' value={credentials.username} />
                </label>
                <div className='model-end'>
                    {!isSignup && (
                        <label>
                            {' '}
                            Fullname
                            <input
                                className='input-title'
                                type='text'
                                name='fullname'
                                value={credentials.fullname}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    )}
                    <label className='input-container'>
                        <p className='input-title'>Password</p>
                        <input type='password' onChange={handleChange} name='password' className='input-pass' value={credentials.password} />
                    </label>
                    {elModal.current && (
                        <button className='button' type='submit' onClick={onCloseModal}>
                            Continue
                        </button>
                    )}
                    <p className='small-txt'>
                        By joining, you agree to the Gighub <span className='link'>Terms of Service</span> and to occasionally receive emails from us. Please read our <span className='link'>Privacy Policy</span> to learn how we use your personal data.
                    </p>
                </div>
            </form>
        </div>
    )
}
