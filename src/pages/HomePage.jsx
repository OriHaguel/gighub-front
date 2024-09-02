import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { CategoryList } from '../cmps/CategoryList.jsx'
import React from 'react'
import { AppHeader } from '../cmps/AppHeader'
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
		<div className='main-page'>
			{/* <section className="main-header">
                <AppHeader />
            </section> */}

			<section className='main-search-area'>
				<MainSearchArea />
			</section>

			<section className='category-list'>
				<CategoryList />
			</section>

			<section className='home-page-carrousel'>
				<h1>Popular services</h1>
				<PopularServicesCarrousel />
			</section>

			<section className='advert-area'>
				<h1>Advert Area</h1>
				<AdvertArea />
			</section>
		</div>
	)
}
