import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'
import { SellerLevel } from './SellerLevel.jsx'
import { SellerPro } from './SellerPro.jsx'
import Star from '../assets/svg/star.svg?react'

export function GigDetails() {
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
				navigate('/gig') // This now uses navigate correctly
			})
	}

	if (!gig) return <div>Loading...</div>

	return (
		<section className='gig-overview'>
			<h1 className='gig-title'>{gig.title}</h1>
			<div className='owner-details'>
				<img
					className='owner-image'
					src={gig.ownerImage || 'fallback-image.png'} // Add fallback for image
					alt={gig.owner || 'Owner'} // Add fallback for alt text
				/>
				<div className='owner-details-container'>
					<div className='first-line'>
						<p className='owner-name'>{gig.owner}</p>
						{gig.ownerPro && <SellerPro />}
						<SellerLevel />
					</div>
					<div className='second-line'>
						<div className='rating-container'>
							<div className='star-container'>
								<Star />
							</div>
							<p>{gig.ownerRating}</p>
							<p className='light-text'>{gig.ownerOrders} orders in queue</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
