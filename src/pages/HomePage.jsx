// React
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'

// Component Imports
import { CategoryList } from '../cmps/CategoryList.jsx'
import { PopularServicesCarrousel } from '../cmps/PopularServicesCarrousel'
import { AdvertArea } from '../cmps/AdvertArea'
import { MainSearchArea } from '../cmps/MainSearchArea.jsx'

import { setFilterBy } from '../store/actions/gig.actions.js'
import { gigService } from '../services/gig/index.js'

export function HomePage() {
	useEffect(() => {
		setFilterBy(gigService.getDefaultFilter())
	}, [])

	return (
		<div className='main-page main-container'>
			<section className='main-search-area'>
				<MainSearchArea />
			</section>

			<section className='category-list categories-container'>
				<CategoryList />
			</section>

			<section className='home-page-carrousel'>
				<h1>Popular services</h1>
				<PopularServicesCarrousel />
			</section>

			<section className='advert-area'>
				{/* <h1>Advert Area</h1> */}
				<AdvertArea />
			</section>
		</div>
	)
}
