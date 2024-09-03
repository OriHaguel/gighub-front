import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { setFilterBy } from '../store/actions/gig.actions'
import { userService } from '../services/user'
// userService.getLoggedinUser

// Image Imports

import HeaderLogo from '../assets/svg/Gighub_logo.svg?react'
// import HeaderNavicon from '../assets/svg/HeaderNavicon.svg?react'
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'
import Globe from '../assets/svg/Globe.svg?react'
import MagnifyIcon from '../assets/svg/MagnifyIcon.svg?react'
import ModalLoginSignupPic from '../assets/img/modal-login-signup.png'

import { Modal } from './Modal'
import { logout } from '../store/actions/user.actions'

export function AppHeader() {
	const navigate = useNavigate()
	const [inputValue, setInputValue] = useState({ txt: '' })
	const [isSinged, setIsSinged] = useState(false);
	// console.log("🚀 ~ AppHeader ~ isSinged:", isSinged)
	const filterBy = useSelector(state => state.gigModule.filterBy)
	const loggedInUser = useSelector(storeState => storeState.userModule.user)
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
		// setInputValue({ txt: '' })
		// navigate(`gigs?${filterBy}`)
		navigate(`gigs?txt=${inputValue.txt}`)
	}

	const openModal = (isSignedUp) => {
		setIsModalOpen(true)
		setIsSinged(isSignedUp)
	}

	return (
		<div id='Header'>
			<header className='header-package fiverr-header logged-out-homepage-header'>
				<div className='header-row-wrapper main-container'>
					<div className='header-row max-width-container equal-padding row-main'>
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
								{/* <li>
									<NavLink to='/language' className='header-link-container header-language'>
										<Globe /> English
									</NavLink>
								</li> */}
								<li>
									<NavLink to='/become-seller' className='header-link-container header-seller'>
										Become a Seller
									</NavLink>
								</li>
								{!loggedInUser && <li>
									<button to='/sign-in' className='sign-button header-link-container' onClick={() => openModal(true)}>
										Sign In
									</button>
								</li>}
								<li>
									{!loggedInUser && <button to='/join' className='join-button' onClick={() => openModal(false)}>
										Join
									</button>}
								</li>
								<li>
									{loggedInUser && (
										<button className='sign-button header-link-container' onClick={logout}>
											Logout
										</button>
									)}
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isSinged={isSinged} setIsSinged={setIsSinged} />
		</div>
	)
}
