import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { GigPage } from './pages/GigsPage.jsx'
import { GigDetailsPage } from './pages/GigDetailsPage.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

export function RootCmp() {
	// useEffect(() => {
	// 	const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
	// 	document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)

	// 	// No need to recalculate or add event listeners since it only runs once
	// }, [])

	return (
		<div className='main-page-container'>
			<AppHeader />
			<main className='main-container'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/gigs' element={<GigPage />} />
					<Route path='/username/:gigId' element={<GigDetailsPage />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</main>
			<AppFooter />
		</div>
	)
}
