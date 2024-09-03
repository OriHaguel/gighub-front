import { useState } from 'react'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

// import { login, signup } from '../store/actions/user.action.js'
import { userService } from '../services/user/index.js'
import { login, signup } from '../store/actions/user.actions.js'
// import { signup, login } from '../store/user.action.js'

// const { useState } = React

export function LoginSignup({ elModal, onClose }) {
	const [isSignup, setIsSignUp] = useState(false)
	const [credentials, setCredentials] = useState(userService.getEmptyCredentials())

	function handleChange({ target }) {
		const { name: field, value } = target
		setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
	}

	function handleSubmit(ev) {
		ev.preventDefault()
		onLogin(credentials)
	}

	function onLogin(credentials) {
		const method = isSignup ? signup : login

		method(credentials)
		// .then(user => showSuccessMsg('Hello!'))
		// .catch(err => showErrorMsg('Error logging in'))
	}

	function onCloseModal() {
		elModal.current.close()
		onClose()
	}
	return (
		// <div className="login-page">
		//     <form className="login-form" onSubmit={handleSubmit}>
		//         <input
		//             type="text"
		//             name="username"
		//             value={credentials.username}
		//             placeholder="Username"
		//             onChange={handleChange}
		//             required
		//             autoFocus
		//         />
		//         <input
		//             type="password"
		//             name="password"
		//             value={credentials.password}
		//             placeholder="Password"
		//             onChange={handleChange}
		//             required
		//             autoComplete="off"
		//         />
		//         {isSignup && <input
		//             type="text"
		//             name="fullname"
		//             value={credentials.fullname}
		//             placeholder="Full name"
		//             onChange={handleChange}
		//             required
		//         />}
		//         <button>{isSignup ? 'Signup' : 'Login'}</button>
		//     </form>

		//     <div className="btns">
		//         <a href="#" onClick={() => setIsSignUp(!isSignup)}>
		//             {isSignup ?
		//                 'Already a member? Login' :
		//                 'New user? Signup here'
		//             }
		//         </a >
		//     </div>
		// </div >
		<div className='login-container'>
			<form className='form' method='dialog' onSubmit={handleSubmit}>
				<h2>Create a new account</h2>
				<p className='sign-in'>
					Already have an account? <span className='link'>Sign in</span>
				</p>
				<label className='input-container'>
					<p className='input-title'>Email or username</p>
					<input type='text' onChange={handleChange} name='username' value='name@email.com' />
				</label>
				<label className='input-container'>
					<p className='input-title'>Password</p>
					<input type='password' onChange={handleChange} name='password' className='input-pass' />
				</label>
				<div className='model-end'>
					{isSignup && (
						<label>
							{' '}
							Fullname
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
					{elModal.current && (
						<button className='button' type='submit' onClick={onCloseModal}>
							Continue
						</button>
					)}
					<a href='#' onClick={() => setIsSignUp(!isSignup)}>
						{isSignup ? 'Already a member? Login' : 'New user? Signup here'}
					</a>
					<p className='small-txt'>
						By joining, you agree to the Gighub <span className='link'>Terms of Service</span> and to occasionally receive emails from us. Please read our <span className='link'>Privacy Policy</span> to learn how we use your personal data.
					</p>
				</div>
			</form>
		</div>
	)
}
