import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Star from '../assets/svg/star.svg?react'
import RepeatClientIcon from '../assets/svg/RepeatClientIcon.svg?react'
import { gigService } from '../services/gig'
import { GigPricing } from './GigPricing.jsx'

// TODO: make review content and review score fit (high score good praise and vice versa)
// TODO: fix flags


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

	function starDecider(rating) {
		return Array(rating)
			.fill(null)
			.map((_, i) => <Star key={i} className='rating-star' />)
	}

	console.log('gig debug', gig)
	if (!gig) return <div>Loading...</div>

	function getMagnitude(value) {
		if (value < 10) return 1
		if (value < 100) return 10
		return 100
	}

	function roundToNearest(value) {
		const magnitude = getMagnitude(value)
		return Math.round(value / magnitude) * magnitude
	}

	const packages = {
		Basic: {
			type: 'Basic',
			price: roundToNearest(gig.price),
			priceRange: roundToNearest(gig.price * 1.5),
			daysToMake: gig.daysToMake + 4,
		},
		Standard: {
			type: 'Standard',
			price: roundToNearest(gig.price),
			priceRange: roundToNearest(gig.price * 1.5),
			daysToMake: gig.daysToMake + 2,
		},
		Premium: {
			type: 'Premium',
			price: roundToNearest(gig.price),
			priceRange: roundToNearest(gig.price * 1.5),
			daysToMake: gig.daysToMake,
		}
	}

	function getRandomPackage(packages) {
		const keys = Object.keys(packages)
		const randomKey = keys[Math.floor(Math.random() * keys.length)]
		return packages[randomKey]
	}
	const currentPackage = getRandomPackage(packages)

	return (
		gig.reviews.map(review => (
			<section className='review-container' key={review._id}>
				<div className='user-details-container'>
					<div className='user-name-container'>
						<img
							className='review-image'
							src={gig.reviewImage || 'fallback-image.png'} // Add fallback for image
							alt={review.by.fullname || 'Reviewer'} // Add fallback for alt text
						/>
						<div className='user-details-1'>
							<div className='user-data-container'>
								<p className='review-name'>{review.by.fullname}</p>
								{review.IsRepeatClient && (
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
					<p className='review-rating'>
						{starDecider(review.rate)}

						{review.rate}
					</p>
					<span className='review-separator-dot'>•</span>
					<p className='review-time'>{review.createdAt}</p>
				</div>
				<p className='review-content'>{review.txt}</p>
				<div className='review-gig-details'>
					<div className='review-price review-stats'>
						${currentPackage.price}-${currentPackage.priceRange}
						<p>Price</p>
					</div>
					{/* <div>|</div> */}
					<div className='review-duration review-stats'>
						{currentPackage.daysToMake} Days
						<p>Duration</p>
					</div>
				</div>
				<div className='seller-response'>
					<div className='seller-details'>
						<img className='owner-image' src={gig.owner.imgUrl || 'fallback-image.png'} alt={gig.owner || 'Owner'} />
						<h2>Seller's Response</h2>
					</div>
					<p>{review.SellerResponse}</p>
				</div>
			</section>
		))
	)
}
