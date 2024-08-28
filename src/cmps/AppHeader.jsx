import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import React, { useEffect, useState } from 'react'
import HeaderLogo from '../assets/svg/Gighub_logo.svg?react'
import HeaderNavicon from '../assets/svg/HeaderNavicon.svg?react'
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'
import { setFilterBy } from '../store/actions/gig.actions'
import Globe from '../assets/svg/Globe.svg?react'
import ModalLoginSignupPic from '../assets/img/modal-login-signup.png'

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
							<form className="search-form dark" onSubmit={onSubmit}>
								<input type="search" placeholder="What service are you looking for today?" onChange={handleChange} value={inputValue.txt} name='txt' />
								<button className="submit-button dark-search-button" type='submit'>
									<div className="submit-button-icon">
										<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg>
									</div>
								</button>
							</form>
						</div>
						<nav className="fiverr-nav">
							<ul>
								<li>
									<NavLink to='/fiverr-pro' className='pro'>
										Fiverr Pro <ChevronIcon />
									</NavLink>
								</li>
								<li>
									<NavLink to='/explore' className='explore'>
										Explore <ChevronIcon />
									</NavLink>
								</li>
								<li>
									<NavLink to='/language' className='language'>
										<Globe /> English
									</NavLink>
								</li>
								<li>
									<NavLink to='/become-seller' className='seller'>
										Become a Seller
									</NavLink>
								</li>
								<li>
									{/* <NavLink to='/sign-in'> */}
									<button to='/sign-in' className='sign-button' onClick={openModal}>
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
				<button className='button close-button' onClick={closeModal}>X</button>
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
					<button className='button' type='submit'>Continue</button>
				</form>
			</dialog>


		</div>
	)
}
