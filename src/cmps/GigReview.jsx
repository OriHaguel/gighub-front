import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'

import star from '../assets/svg/star.svg?react'
import RepeatClientIcon from '../assets/svg/RepeatClientIcon.svg?react'

// TODO: make review content and review score fit (high score good praise and vice versa)
// TODO: add price
// TODO: add duration
// TODO: add helpful
// TODO: borrow buttons
// TODO: fix flags
// TODO: stars system

export function GigReview() {
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
		<section className='review-container'>
			<div className='user-details-container'>
				<div className='user-name-container'>
					<img
						className='review-image'
						src={gig.reviewImage || 'fallback-image.png'} // Add fallback for image
						alt={gig.reviewName || 'Reviewer'} // Add fallback for alt text
					/>
					<div className='user-details-1'>
						<div className='user-data-container'>
							<p className='review-name'>{gig.reviewName}</p>
							{gig.reviewIsRepeatClient && (
								<div className='review-repeat-client'>
									<span className='review-separator-dot'>•</span>
									<RepeatClientIcon className='repeat-icon' />
									<p>Repeat Client</p>
								</div>
							)}
						</div>
						<div className='review-country'>
							<p className='review-country-flag'>{gig.reviewCountry.flag}</p>
							<p className='review-country'>{gig.reviewCountry.country}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='review-details-container'>
				<p className='review-rating'>{gig.reviewRating}</p>
				<span className='review-separator-dot'>•</span>
				<p className='review-time'>{gig.reviewTime}</p>
			</div>
			<p className='review-content'>{gig.reviewContent}</p>
			<div className='review-gig-details'>
				<div className='review-price review-stats'>
					{/* price actual */}
					<p>Price</p>
				</div>
				<div className='review-duration review-stats'>
					{/* duration actual */}
					<p>Duration</p>
				</div>
			</div>
			<p className='review-response'>{gig.reviewSellerResponse}</p>
		</section>
	)
}
