import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { LoginSignup } from './LoginSignup'
import { logout } from '../store/actions/user.actions'

// ICON imports
import ArrowIcon from '../assets/svg/ArrowIcon.svg?react'
import LongArrowIcon from '../assets/svg/LongArrowIcon.svg?react'
import { setFilterBy } from '../store/actions/gig.actions'

export function NaviconHeader({ onClose, isOpen, isSinged, setIsSinged }) {
	const modalRef = useRef(null)
	const [selectDropOpen, setSelectDropOpen] = useState(false)
	const loggedInUser = useSelector(storeState => storeState.userModule.user)

	useEffect(() => {
		const handleClickOutside = event => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose()
			}
		}
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = 'hidden'
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	const toggleDropdown = () => {
		console.log('Toggling dropdown')
		setSelectDropOpen(!selectDropOpen)
	}
	const categoriesList = [{ categoryTxt: 'Graphics & Design' }, { categoryTxt: 'Programming & Tech' }, { categoryTxt: 'Digital Marketing' }, { categoryTxt: 'Video & Animation' }, { categoryTxt: 'Writing & Translation' }, { categoryTxt: 'Music & Audio' }, { categoryTxt: 'Business' }, { categoryTxt: 'Consulting' }, { categoryTxt: 'AI Services' }]

	function onCategory(categoryToSave) {
		return `?category=${categoryToSave.categoryTxt.split(' ')[0].toLowerCase()}`
	}
	return (
		<div className={`navicon-container ${isOpen ? 'open' : ''}`}>
			<div className='modal-navicon' ref={modalRef}>
				<div className='navicon-modal-content'>
					{!loggedInUser && (
						<Link to='/signup' onClick={onClose}>
							<button className='navicon-button-first'>Join gighub</button>
						</Link>
					)}
					{!loggedInUser && (
						<Link to='/signup' onClick={onClose}>
							<button className='navicon-button-second'>Sign In</button>
						</Link>
					)}
					{loggedInUser && (
						<button className='sign-button-navicon-mobile' onClick={logout}>
							Logout
						</button>
					)}
					<article className='sidebar collapsible'>
						<div className='collapsible-header' onClick={toggleDropdown}>
							<div className='collapsible-title'>
								<span>Browse Categories</span>
							</div>
							<div className='collapsible-toggle'>
								<span className='toggle-icon'>
									<ArrowIcon />
								</span>
							</div>
						</div>

						{selectDropOpen && (
							<div className='collapsible-content'>
								<ul className='category-list'>
									{categoriesList.map(category => (
										<li className='category-item' key={category.categoryTxt}>
											<div className='category-menu-item'>
												<Link className='category-label' to={`gigs${onCategory(category)}`} onClick={() => setFilterBy({ category: category.categoryTxt.split(' ')[0].toLowerCase() })}>
													<span>{category.categoryTxt}</span>
												</Link>
												<span className='arrow-icon'>
													<LongArrowIcon />
												</span>
											</div>
										</li>
										// <li className='category-item' key={category.categoryTxt}>
										// 	<div className='category-menu-item'>
										// 		<div className='category-label'>
										// 			<span>{category.categoryTxt}</span>
										// 		</div>
										// 		<span className='arrow-icon'>
										// 			<LongArrowIcon />
										// 		</span>
										// 	</div>
										// </li>
									))}

									{/* <li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>Programming & Tech</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li>
									<li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>Digital Marketing</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li>
									<li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>Video & Animation</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li>
									<li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>Writing & Translation</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li>
									<li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>Music & Audio</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li>
									<li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>Business</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li>
									<li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>Consulting</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li>
									<li className='category-item'>
										<div className='category-menu-item'>
											<div className='category-label'>
												<span>AI Services</span>
											</div>
											<span className='arrow-icon'>
												<LongArrowIcon />
											</span>
										</div>
									</li> */}
								</ul>
							</div>
						)}
					</article>

					<Link to='/' className='navicon-home-mobile' onClick={onClose}>
						<div className='navicon-txt'>Home</div>
					</Link>
					<Link to='/about' className=' navicon-home-mobile about-link' onClick={onClose} >
						<div className='navicon-txt'>About</div>
					</Link>
					{/* temporary here */}
					<Link to='/'>
					<div className='navicon-txt'>Order Page Mobile</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
