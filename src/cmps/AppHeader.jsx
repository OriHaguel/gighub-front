import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { setFilterBy } from '../store/actions/gig.actions'

// Image Imports
import React, { useEffect, useRef, useState } from 'react'
import HeaderLogo from '../assets/svg/Gighub_logo.svg?react'
// import HeaderNavicon from '../assets/svg/HeaderNavicon.svg?react'
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'
import Globe from '../assets/svg/Globe.svg?react'
import MagnifyIcon from '../assets/svg/MagnifyIcon.svg?react'
import ModalLoginSignupPic from '../assets/img/modal-login-signup.png'

import { Modal } from './Modal'

export function AppHeader() {
	const navigate = useNavigate()
	const [inputValue, setInputValue] = useState({ txt: '' })
	const filterBy = useSelector(state => state.gigModule.filterBy)

	const [isVisible, setIsVisible] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)



	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY || window.pageYOffset

			if (scrollPosition > 405) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])



	function handleChange(ev) {
		const type = ev.target.type
		const field = ev.target.name
		let value = ev.target.value

		switch (type) {
			case 'text':
			case 'radio':
				value = field === 'sortDir' ? +ev.target.value : ev.target.value
				if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
				break
			case 'number':
				value = +ev.target.value || ''
				break
		}
		setInputValue(prevFilter => ({ ...prevFilter, [field]: value }))
	}

	function onSubmit(ev) {
		ev.preventDefault()
		if (filterBy.category) {
			setFilterBy({ category: '' })
		}
		setFilterBy(inputValue)
		setInputValue({ txt: '' })
		navigate('gigs')
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div id='Header'>
			<header className='header-package fiverr-header logged-out-homepage-header'>
				<div className='header-row-wrapper'>
					<div className='header-row max-width-container equal-padding row-main'>
						{/* <button className='btn-navicon js-side-nav-trigger'>
							<HeaderNavicon />
						</button> */}
						<Link to='/' className='site-logo'>
							<HeaderLogo />
						</Link>
						<div className={`fiverr-header-search-animated ${isVisible ? 'visible' : ''}`}>
							<form className='search-form dark' onSubmit={onSubmit}>
								<input type='search' placeholder='What service are you looking for today?' onChange={handleChange} value={inputValue.txt} name='txt' />
								<button className='submit-button dark-search-button' type='submit'>
									<div className='submit-button-icon'>
										<MagnifyIcon className='magnify-icon' />
									</div>
								</button>
							</form>
						</div>
						<nav className='fiverr-nav'>
							<ul className='header-navigation-container'>
								<li>
									<NavLink to='/fiverr-pro' className='header-link-container header-pro'>
										Gighub Pro <ChevronIcon className='header-chevron' />
									</NavLink>
								</li>
								<li>
									<NavLink to='/explore' className='header-link-container header-explore'>
										Explore <ChevronIcon className='header-chevron' />
									</NavLink>
								</li>
								<li>
									<NavLink to='/language' className='header-link-container header-language'>
										<Globe /> English
									</NavLink>
								</li>
								<li>
									<NavLink to='/become-seller' className='header-link-container header-seller'>
										Become a Seller
									</NavLink>
								</li>
								<li>
									{/* <NavLink to='/sign-in'> */}
									<button to='/sign-in' className='sign-button header-link-container' onClick={openModal}>
										Sign In
									</button>
									{/* </NavLink> */}
								</li>
								<li>
									{/* <NavLink to='/join'> */}
									<button to='/join' className='join-button' onClick={openModal}>
										Join
									</button>
									{/* </NavLink> */}
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			{/* Button to open the modal */}
			{/* <button className="login-signup-modal" onClick={openModal}>open modal</button> */}

			<dialog className='modal' id='modal' open={isModalOpen}>
				<button className='button close-button' onClick={closeModal}>
					X
				</button>
				<img src={ModalLoginSignupPic} alt='modal' className='modal-image' />
				<div className='modal-txt'>
					<h2>Success starts here</h2>
					<p>Over 700 categories</p>
					<p>Quality work done faster</p>
					<p>Access to talent and businesses across the globe</p>
				</div>
				<form className='form' method='dialog'>
					<h2>Create a new account</h2>
					<p>Already have an account? Sign in</p>
					<label>
						Email
						<input type='email' />
					</label>
					<label>
						Password
						<input type='pass' />
					</label>
					<button className='button' type='submit'>
						Continue
					</button>
				</form>
			</dialog>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


		</div>
	)
}
