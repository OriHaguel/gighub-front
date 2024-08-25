import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import React from 'react'
import HeaderLogo from '../assets/svg/Gighub_logo.svg?react'
import HeaderNavicon from '../assets/svg/HeaderNavicon.svg?react'

export function AppHeader() {
	const navigate = useNavigate()

	return (
		<div id='Header'>
			<header className='header-package fiverr-header logged-out-homepage-header'>
				<div className='header-row-wrapper'>
					<div className='header-row max-width-container equal-padding row-main'>
						<button className='btn-navicon js-side-nav-trigger'>
							<HeaderNavicon />
						</button>
						<Link to='/' className='site-logo'>
							<HeaderLogo />
						</Link>
						{/* <div className="fiverr-header-search-animated">
				  <form className="search-form dark">
					<input type="search" placeholder="What service are you looking for today?" />
					<button className="submit-button dark-search-button bg-co-green-700">
					  <div className="submit-button-icon">
						<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
						  <path d="..."></path>
						</svg>
					  </div>
					</button>
				  </form>
				</div> */}
						<nav className='fiverr-nav'>
							<ul>
								<li>
									<NavLink to='/fiverr-pro' className='pro'>
										Fiverr Pro
									</NavLink>
								</li>
								<li>
									<NavLink to='/explore' className='explore'>
										Explore
									</NavLink>
								</li>
								<li>
									<NavLink to='/language' className='language'>
										Language
									</NavLink>
								</li>
								<li>
									<NavLink to='/become-seller' className='seller'>
										Become a Seller
									</NavLink>
								</li>
								<li>
									<NavLink to='/sign-in' className='sign'>
										Sign In
									</NavLink>
								</li>
								<li>
									<NavLink to='/join' className='join-button'>
										Join
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	)
}
