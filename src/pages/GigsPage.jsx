// React
import { useEffect, useState, useRef } from 'react'
import { useParams, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

// Components
import { GigList } from '../cmps/GigList'
import { SortGigs } from '../cmps/SortGigs'
import { GigBreadcrumbs } from '../cmps/GigBreadcrumbs'
// import { getFluffTxt } from '../cmps/GigBreadcrumbs'

import { loadGigs, setFilterBy } from '../store/actions/gig.actions'
import { gigService } from '../services/gig'
// Images
import GigImage from '../assets/img/gig-image.png'
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'
import { FilterGigPage } from '../cmps/FilterGigPage'
import { breadCrumbsTxt } from '../services/util.service'

export function GigPage() {
	const param = useParams()
	const gigs = useSelector(state => state.gigModule.gigs)
	const filterBy = useSelector(state => state.gigModule.filterBy)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const [searchParams, setSearchParams] = useSearchParams()
	const defaultFilter = gigService.getFilterFromSearchParams(searchParams)
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const category = queryParams.get('category')


	useEffect(() => {
		setFilterBy(defaultFilter)
		// console.log("🚀 ~ useEffect ~ filterBy:", filterBy)
	}, [])

	useEffect(() => {
		setSearchParams(filterBy, { replace: true })
		// console.log("🚀 ~ useEffect ~ filterBy:", filterBy)

		async function loadGig() {
			try {
				if (filterBy.category || filterBy.txt || filterBy.price) {
					await loadGigs(filterBy)
				}
			} catch (error) {
				console.log('🚀 ~ loadGig ~ error:', error)
			}
		}

		loadGig()
	}, [filterBy])

	const toggleDropdown = dropdownName => {
		if (activeDropdown === dropdownName) {
			setActiveDropdown(null)
		} else {
			setActiveDropdown(dropdownName)
		}
	}
	const categoryMapping = breadCrumbsTxt()
	const displayCategory = categoryMapping[category] ?? 'Gig Page'
	if (!gigs) return

	return (
		<div className='gig-page main-container'>
			<GigBreadcrumbs />
			<h1 className='main-msg'>{displayCategory.fluffTxt || displayCategory}</h1>
			<SortGigs activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} setFilterBy={setFilterBy} filterBy={defaultFilter} />
			<FilterGigPage />
			{param.gigs !== 'ai' && param.gigs !== 'consulting' && (
				<section className='gig-prev-container'>
					<GigList gigs={gigs} />
				</section>
			)}
			{/* <section className="pagination">
                <div>||gig pages section....||</div>
            </section> */}
		</div>
	)
}
