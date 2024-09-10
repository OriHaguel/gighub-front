import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { GigPage } from './pages/GigsPage.jsx'
import { GigDetailsPage } from './pages/GigDetailsPage.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { Signup } from './pages/Signup.jsx'
// import { signup } from './store/actions/user.actions.js'

export function RootCmp() {
	// useEffect(() => {
	// 	const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
	// 	document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)

	// }, [])

	return (
		<div className='main-page-container'>
			<AppHeader />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/gigs' element={<GigPage />} />
					<Route path='/username/:gigId' element={<GigDetailsPage />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</main>
			<AppFooter />
		</div>
	)
}
