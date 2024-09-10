import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SellerLevel } from './SellerLevel.jsx'
import { SellerPro } from './SellerPro.jsx'
import { gigService } from '../services/gig/index.js'
import Star from '../assets/svg/star.svg?react'
import GigImage from '../assets/img/gig-image.png'
import { getRandomIntInclusive } from '../services/util.service.js'

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
				navigate('/gig')
			})
	}

	function AddOrders() {
		switch (gig.owner.level) {
			case 1:
				return getRandomIntInclusive(1, 9);
			case 2:
				return getRandomIntInclusive(10, 20);
			case 3:
				return getRandomIntInclusive(21, 40);
			default:
				return 0;
		}
	}


	if (!gig) return <div>Loading...</div>

	if (gig.img.length === 0) {
		gig.img = [GigImage, GigImage, GigImage]
	}

	return (
		<section className='gig-overview grid-row-1-mobile'>
			<h1 className='gig-title'>{gig.title}</h1>
			<div className='owner-details'>
				<img className='owner-image' src={gig.owner.imgUrl || 'fallback-image.png'} />
				<div className='owner-details-container'>
					<div className='first-line'>
						<p className='owner-name'>{gig.owner.fullname}</p>
						{gig.owner.pro && <SellerPro />}
						<SellerLevel />
					</div>
					<div className='second-line'>
						<div className='rating-container'>
							<div className='star-container'>
								<Star />
							</div>
							<p>{gig.owner.rate}</p>
							<p className='light-text'>{AddOrders()} orders in queue</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
