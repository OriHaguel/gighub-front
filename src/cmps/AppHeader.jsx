// React
import React, { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { setFilterBy } from '../store/actions/gig.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { userService } from '../services/user'
// userService.getLoggedinUser

// Component Imports
import { Modal } from './Modal.jsx'
import { HeaderCategories } from './HeaderCategories.jsx'
import { NaviconHeader } from './NaviconHeader.jsx'

import { logout } from '../store/actions/user.actions'

// Image Imports
import HeaderLogo from '../assets/svg/Gighub_logo.svg?react'
import MagnifyIcon from '../assets/svg/MagnifyIcon.svg?react'
// import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'
import HeaderNavicon from '../assets/svg/HeaderNavicon.svg?react'
// import Globe from '../assets/svg/Globe.svg?react'
// import ModalLoginSignupPic from '../assets/img/modal-login-signup.png'
import ProfilePic from '../assets/img/profile_clean.png'

export function AppHeader() {
	const navigate = useNavigate()
	const [inputValue, setInputValue] = useState({ txt: '' })
	const [isSinged, setIsSinged] = useState(false)
	// console.log("🚀 ~ AppHeader ~ isSinged:", isSinged)
	const filterBy = useSelector(state => state.gigModule.filterBy)
	const loggedInUser = useSelector(storeState => storeState.userModule.user)
	const [isVisible, setIsVisible] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isMobileNaviconOpen, setIsMobileNaviconOpen] = useState(false)
	const [selectDropOpen, setSelectDropOpen] = useState(false)
	const dropDownRef = useRef(null)
	const user = useSelector(state => state.userModule.user)

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

	const toggleNavicon = () => {
		// setIsSinged(isSignedUp)
		setIsMobileNaviconOpen(!isMobileNaviconOpen)
	}

	const toggleDropdown = () => {
		console.log('Toggling dropdown')
		setSelectDropOpen(!selectDropOpen)
	}

	useEffect(() => {
		const handleClickOutside = event => {
			if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
				setSelectDropOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [dropDownRef])

	const isHomePage = location.pathname === '/'

	return (
		<div id='Header' className={`${isHomePage ? 'header-sticky' : ''}`}>
			<header className='header-package'>
				<div className='main-container mobile-head-container'>
					<div className='header-row'>
						<div className='navicon-header'>
							<button className='navicon-header-button' onClick={toggleNavicon}>
								<HeaderNavicon />
							</button>
						</div>
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
								<li>
									<Link to='/about' className='about-link hide-on-mobile'>
										About
									</Link>
								</li>
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
								<li className='about-link hide-mobile'>{loggedInUser && <Link to='/dashboard'>Dashboard</Link>}</li>
								<li>
									{loggedInUser && (
										<article className='header-collapsible' ref={dropDownRef}>
											<div className='collapsible-header-options' onClick={toggleDropdown}>
												<div className='collapsible-img'>
													<img src={user.imgUrl || ProfilePic} alt='profile-pic' />
												</div>
											</div>
											{selectDropOpen && (
												<div className='collapsible-content'>
													<ul className='content-list'>
														<li className='options-collapsible'>
															<div className='option-menu-item'>
																<div className='option-label' onClick={toggleDropdown}>
																	<button className='sign-button header-link-container' onClick={logout}>
																		Logout
																	</button>
																</div>
															</div>
														</li>
													</ul>
												</div>
											)}
										</article>
									)}
								</li>
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
			{isMobileNaviconOpen && <NaviconHeader isOpen={toggleNavicon} onClose={toggleNavicon} />}
		</div>
	)
}
