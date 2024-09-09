// React
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { setFilterBy } from '../store/actions/gig.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { userService } from '../services/user'
// userService.getLoggedinUser

// Component Imports
import { Modal } from './Modal'
import { HeaderCategories } from './HeaderCategories'

import { logout } from '../store/actions/user.actions'

// Image Imports
import HeaderLogo from '../assets/svg/Gighub_logo.svg?react'
import MagnifyIcon from '../assets/svg/MagnifyIcon.svg?react'
// import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'
// import HeaderNavicon from '../assets/svg/HeaderNavicon.svg?react'
// import Globe from '../assets/svg/Globe.svg?react'
// import ModalLoginSignupPic from '../assets/img/modal-login-signup.png'

export function AppHeader() {
	const navigate = useNavigate()
	const [inputValue, setInputValue] = useState({ txt: '' })
	const [isSinged, setIsSinged] = useState(false)
	// console.log("🚀 ~ AppHeader ~ isSinged:", isSinged)
	const filterBy = useSelector(state => state.gigModule.filterBy)
	const loggedInUser = useSelector(storeState => storeState.userModule.user)
	const [isVisible, setIsVisible] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const location = useLocation()
	const isHomepage = location.pathname === '/'

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

	const openModal = isSignedUp => {
		setIsModalOpen(true)
		setIsSinged(isSignedUp)
	}

	const isHomePage = location.pathname === '/'

	return (
		<div id='Header' className={`${isHomePage ? 'header-sticky' : ''}`}>
			<header className='header-package'>
				<div className='main-container mobile-head-container'>
					<div className='header-row'>
						<Link to='/' className='site-logo'>
							<HeaderLogo />
						</Link>
						{/* Search bar */}
						<div className={`fiverr-header-search-animated ${!isHomePage || (isHomePage && isVisible) ? 'visible' : 'hidden'}`}>
							<form className={`search-form ${isHomepage ? 'hide-on-mobile' : ''}`} onSubmit={onSubmit}>
								<input type='search' placeholder='What service are you looking for today?' onChange={handleChange} value={inputValue.txt} name='txt' />
								<button className='submit-button dark-search-button' type='submit'>
									<div className='submit-button-icon '>
										<MagnifyIcon className='magnify-icon' />
									</div>
								</button>
							</form>
						</div>
						<nav className='fiverr-nav'>
							<ul className='header-navigation-container'>
								{/* <li>
									<NavLink to='/become-seller' className='header-link-container header-seller'>
										Become a Seller
									</NavLink>
								</li> */}
								{!loggedInUser && (
									<li>
										<button to='/sign-in' className='sign-button header-link-container' onClick={() => openModal(false)}>
											Sign In
										</button>
									</li>
								)}
								<li>
									{!loggedInUser && (
										<button to='/join' className='join-button' onClick={() => openModal(true)}>
											Join
										</button>
									)}
								</li>
								<li>
									{loggedInUser && (
										<button className='sign-button header-link-container' onClick={logout}>
											Logout
										</button>
									)}
								</li>
								<li>{loggedInUser && <Link to={'/dashboard'}>Dashboard</Link>}</li>
							</ul>
						</nav>
					</div>
					{/* Mobile search bar */}
					<div className={`fiverr-header-search-animated ${!isHomePage || (isHomePage && isVisible) ? 'visible' : 'hidden'}`}>
						<form className={`search-form-mobile ${isHomepage ? 'hide-on-mobile' : ''}`} onSubmit={onSubmit}>
							<input type='search' placeholder='Find services' onChange={handleChange} value={inputValue.txt} name='txt' />
						</form>
					</div>
				</div>
			</header>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isSinged={isSinged} setIsSinged={setIsSinged} />
			{!isHomePage && <HeaderCategories />}
		</div>
	)
}
