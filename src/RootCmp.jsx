import React from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'

import { GigDetails } from './pages/GigDetails.jsx'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'

export function RootCmp() {
	return (
		<div className='main-container'>
			<AppHeader />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='gig/:gigId' element={<GigDetails />} />
				</Routes>
			</main>
			<AppFooter />
		</div>
	)
}
