import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GigReview } from './GigReview.jsx'

import star from '../assets/svg/star.svg?react'
import { gigService } from '../services/gig/index.js'

// TODO: randomize reviews

export function GigReviewsList() {
	const [gig, setGig] = useState(null)
	const { gigId } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		if (gigId) loadGig()
	}, [gigId])

	function loadGig() {
		gigService
			.getById(gigId)
			.then(gig => setGig(gig))
			.catch(err => {
				console.log('Had issues in gig details', err)
				navigate('/gig') // This now uses navigate correctly3
			})
	}

	if (!gig) return <div>Loading...</div>

	return (
		<section className='reviews-list-container'>
			<div className='review-overview-container'>
				<h1 className='review-title'>Reviews</h1>
				<h2 className='reviews-for-gig'>Reviews for this Gig</h2>
			</div>
			<GigReview />
		</section>
	)
}
