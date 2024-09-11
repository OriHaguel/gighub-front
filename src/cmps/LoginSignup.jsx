import { useEffect, useState } from 'react'
import { userService } from '../services/user/index.js'
import { login, signup } from '../store/actions/user.actions.js'
// import Swal from 'sweetalert2'

export function LoginSignup({ elModal, onClose, isSignup, setIsSignUp }) {
	const [credentials, setCredentials] = useState(userService.getEmptyCredentials())

	// Track whether the form is filled
	const isFormFilled = credentials.username && credentials.password && (!isSignup || credentials.fullname)

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
		const method = isSignup ? signup : login
		method(credentials)
	}

	function onCloseModal() {
		elModal.current.close()
		onClose()
	}

	return (
		<div className='login-container'>
			<form className='form' method='dialog' onSubmit={handleSubmit}>
				<h2>{isSignup ? 'Create a new account' : 'Sign in'}</h2>
				<a href='#' onClick={() => setIsSignUp(!isSignup)} className='sign-in'>
					{!isSignup ? "Don't have an account? Join here" : 'Already have an account? Sign in'}
				</a>
				<label className='input-container'>
					<p className='input-title'>Email or username</p>
					<input type='text' onChange={handleChange} name='username' value={credentials.username} />
				</label>

				<div className={`model-end ${isSignup && 'nogap'}`}>
					{isSignup && (
						<label className='input-title'>
							<p className='modal-fullname'>Fullname</p>
							<input type='text' name='fullname' value={credentials.fullname} onChange={handleChange} required />
						</label>
					)}
					<label className='input-container'>
						<p className='input-title'>Password</p>
						<input type='password' onChange={handleChange} name='password' className='input-pass' value={credentials.password} />
					</label>
					<div>
						{elModal.current && (
							<button className={`button ${isFormFilled ? 'button-filled' : ''}`} type='submit' onClick={onCloseModal}>
								Continue
							</button>
						)}
						<p className='small-txt'>
							By joining, you agree to the Gighub <span className='link'>Terms of Service</span> and to occasionally receive emails from us. Please read our <span className='link'>Privacy Policy</span> to learn how we use your personal data.
						</p>
					</div>
				</div>
			</form>
		</div>
	)
}
