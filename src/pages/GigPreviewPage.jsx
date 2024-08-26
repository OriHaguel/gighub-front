import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'
import { GigDetails } from '../cmps/GigDetails'

export function GigPreview() {
	return (
		<section>
			<GigDetails />
			{/* <GigPricing /> */}
			{/* <GigReviews /> */}
		</section>
	)
}
