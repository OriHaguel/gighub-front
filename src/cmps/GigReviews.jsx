import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'

export function GigReviews() {
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
		<section>
			<h1>review</h1>
			<div className='user-details'>
				<p className='review-name'>{gig.reviewName}</p>
				<p className='review-country'>{gig.reviewCountry}</p>
				<p className='review-repeat-client'>{gig.reivewIsRepeatClient}</p>
			</div>
			<div className='review-details'>
				<p className='review-rating'>{gig.reviewRating}</p>
				<p className='review-rating'>{gig.reviewTime}</p>
				<p className='review-content'>{gig.reviewContent}</p>
			</div>
			<p className='review-response'>{gig.reviewSellerResponse}</p>
		</section>
	)
}
