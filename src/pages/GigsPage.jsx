// React
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

// Components
import { GigList } from '../cmps/GigList'
import { SortGigs } from '../cmps/SortGigs'
import { GigBreadcrumbs } from '../cmps/GigBreadcrumbs'

import { loadGigs, setFilterBy } from '../store/actions/gig.actions'
import { gigService } from '../services/gig'
// Images
import GigImage from '../assets/img/gig-image.png'
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'

export function GigPage() {
	const param = useParams()
	const gigs = useSelector(state => state.gigModule.gigs)
	const filterBy = useSelector(state => state.gigModule.filterBy)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const [searchParams, setSearchParams] = useSearchParams()
	const defaultFilter = gigService.getFilterFromSearchParams(searchParams)

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
	if (!gigs) return

	return (
		<div className='gig-page'>
			<GigBreadcrumbs />
			<h1 className='main-msg'>Gig Page</h1>
			<SortGigs activeDropdown={activeDropdown} toggleDropdown={toggleDropdown} setFilterBy={setFilterBy} filterBy={defaultFilter} />

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
