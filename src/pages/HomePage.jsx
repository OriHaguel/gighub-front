import { CategoryList } from '../cmps/CategoryList.jsx'
import React from 'react'
import { AppHeader } from '../cmps/AppHeader'
import { PopularServicesCarrousel } from '../cmps/PopularServicesCarrousel'
import { AdvertArea } from '../cmps/AdvertArea'
import { gigService } from '../services/gig/gig.service.local.js'

export function HomePage() {
	return (
		<div className='main-page'>
			<AppHeader />

			<section>
				<h1>Home sweet Home</h1>
				<h1>GigHub</h1>
				<p>Welcome to our platform GigHub! Find everything you need, just like on Fiverr.</p>
			</section>

			<CategoryList />
			<section className='home-page-carrousel'>
				<h1>Popular Services</h1>
				<PopularServicesCarrousel />
			</section>

			<section className='advert-area'>
				<h1>Advert Area</h1>
				<AdvertArea />
			</section>
		</div>
	)
}
