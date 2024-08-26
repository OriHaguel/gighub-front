import React from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { GigDetails } from './pages/GigDetails.jsx'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { GigPage } from './pages/GigsPage.jsx'
import { GigPreview } from './pages/GigPreviewPage.jsx'

export function RootCmp() {
	return (
		<div className='main-container'>
			<AppHeader />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/gigs' element={<GigPage />} />
					{/* <Route path='/category/:gigs' element={<GigPage />} /> */}
					<Route path='/username/:gigId' element={<GigPreview />} />
					{/* <Route path='/gigs/:gigId' element={<GigPreview />} /> */}
				</Routes>
			</main>
			<AppFooter />
		</div>
	)
}
