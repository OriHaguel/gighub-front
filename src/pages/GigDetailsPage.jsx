import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GigDetails } from '../cmps/GigDetails'

export function GigPreview() {
	return (
		<section>
			<GigDetails />
			<GigCarrousel />
			<GigAbout />

			{/* <GigPricing /> */}
			{/* <GigReviews /> */}
		</section>
	)
}
