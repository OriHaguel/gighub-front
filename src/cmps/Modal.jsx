import React, { useEffect, useRef, useState } from 'react'

import { userService } from '../services/user/user.service.local'
import { useSelector } from 'react-redux'
import { LoginSignup } from './LoginSignup'

// Image imports
import ModalLoginSignupPic from '../assets/img/modal-login-signup.png'
import TickIcon from '../assets/svg/TickIcon.svg?react'

export function Modal({ isOpen, onClose }) {
	const user = useSelector(state => state.userModule.user)
	const elModal = useRef(null)
	useEffect(() => {
		const handleEscKey = event => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			elModal.current.showModal()
			document.addEventListener('keydown', handleEscKey)
			document.body.style.overflow = 'hidden'
		} else {
			elModal.current.close()
			document.removeEventListener('keydown', handleEscKey)
			document.body.style.overflow = 'auto'
		}

		return () => document.removeEventListener('keydown', handleEscKey)
	}, [isOpen, onClose])

	return (
		<div className={`modal-container ${isOpen && 'relative'}`}>
			<dialog
				className='modal'
				id='modal'
				ref={elModal}
				onClick={e => {
					if (e.target === elModal.current) onClose()
				}}>
				{/* <button className='button close-button' onClick={closeModal}>X</button> */}
				<img src={ModalLoginSignupPic} alt='modal' className='modal-image' />
				<div className='modal-txt'>
					<h2>Success starts here</h2>
					<p>
						<TickIcon /> Over 700 categories
					</p>
					<p>
						<TickIcon /> Quality work done faster
					</p>
					<p>
						<TickIcon /> Access to talent and businesses across the globe
					</p>
				</div>
				{/* <form className='form' method='dialog'>
                    <h2>Create a new account</h2>
                    <p>Already have an account? Sign in</p>
                    <label>
                        Email or username
                        <input type='email' />
                    </label>
                    <label>
                        Password
                        <input type='pass' />
                    </label>
                    <button className='button' type='submit'>Continue</button>
                </form> */}
				<LoginSignup elModal={elModal} onClose={onClose} />
			</dialog>
		</div>
	)
}
