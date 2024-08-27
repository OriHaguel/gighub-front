import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'

export function GigDetails() {
	const [gig, setGig] = useState(null)
	const { gigId } = useParams()

	useEffect(() => {
		if (gigId) loadGig()
	}, [gigId])

	function loadGig() {
		gigService
			.getById(gigId)
			.then(gig => setGig(gig))
			.catch(err => {
				console.log('Had issues in gig details', err)
				navigate('/gig')
			})
	}
	if (!gig) return <div>Loading...</div>

	return (
		<section className='gig-overview'>
			<h1 className='text-display-3'>{gig.title}</h1>
			<div tabIndex='0' role='button' aria-label='Scroll to about the seller' className='o6KMeAI tbody-4  text-bold'>
				<p>{gig.owner}</p>
				<p>Price: ${gig.price}</p>
				<p>Days to make: {gig.daysToMake}</p>
			</div>
		</section>
	)
}
