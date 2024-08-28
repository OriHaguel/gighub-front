import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'

import LevelStar from '../assets/svg/LevelStar.svg?react'
import LevelStarEmpty from '../assets/svg/LevelStarEmpty.svg?react'

export function SellerLevel() {
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

	if (!gig) return <div>Loading...</div>

	const maxLevel = 3
	const filledStars = gig.ownerLevel
	const emptyStars = maxLevel - filledStars

	return (
		<section className={gig.ownerLevel === 3 ? 'top-rated owner-level-container' : 'owner-level-container'}>
			{/* Conditionally render text and apply CSS background color for Top Rated */}
			<p>{gig.ownerLevel === 3 ? 'Top Rated' : `Level ${gig.ownerLevel}`}</p>

			{/* Render filled stars */}
			{Array.from({ length: filledStars }).map((_, idx) => (
				<LevelStar key={idx} />
			))}

			{/* Render empty stars */}
			{Array.from({ length: emptyStars }).map((_, idx) => (
				<LevelStarEmpty key={idx + filledStars} />
			))}
		</section>
	)
}
