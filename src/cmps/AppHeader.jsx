import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import React from "react"


export function AppHeader() {

	const navigate = useNavigate()

	return (
		<div id="Header">
			<header className="header-package fiverr-header logged-out-homepage-header">
				<div className="header-row-wrapper">
					<div className="header-row max-width-container equal-padding row-main">
						<button className="btn-navicon js-side-nav-trigger">
							<svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
								<rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
								<rect width="23" height="3" rx="1.5" fill="#555"></rect>
								<rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
							</svg>
						</button>
						<Link to="/" className="site-logo">
							<a href="/?source=top_nav" className="site-logo"><svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg></a>
							<svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g fill="#404145">
									<path d="..."></path>
								</g>
								<g fill="#1dbf73">
									<path d="..."></path>
								</g>
							</svg>
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
						<nav className="fiverr-nav">
							<ul>
								<li>
									<NavLink to="/fiverr-pro" className="pro">Fiverr Pro</NavLink>
								</li>
								<li>
									<NavLink to="/explore" className="explore">Explore</NavLink>
								</li>
								<li>
									<NavLink to="/language" className="language">Language</NavLink>
								</li>
								<li>
									<NavLink to="/become-seller" className="seller">Become a Seller</NavLink>
								</li>
								<li>
									<NavLink to="/sign-in" className="sign">Sign In</NavLink>
								</li>
								<li>
									<NavLink to="/join" className="join-button">Join</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	)
}