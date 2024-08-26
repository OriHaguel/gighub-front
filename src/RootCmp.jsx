import React from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { GigPage } from './pages/GigsPage.jsx'
import { GigDetailsPage } from './pages/GigDetailsPage.jsx'

// import { GigDetails } from './pages/GigDetails.jsx'

export function RootCmp() {
	return (
		<div className='main-container'>
			<AppHeader />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/category/:gigs' element={<GigPage />} />
					<Route path='/username/:gigId' element={<GigDetailsPage />} />
				</Routes>
			</main>
			<AppFooter />
		</div>
	)
}
