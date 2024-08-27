import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { GigDetails } from '../cmps/GigDetails'
import { GigCarrousel } from '../cmps/GigCarrousel'
import { GigAbout } from '../cmps/GigAbout'
import { GigPricing } from '../cmps/GigPricing'
import { GigReviews } from '../cmps/GigReviews'

export function GigDetailsPage() {
	return (
		<section>
			<GigDetails />

			{/* <GigCarrousel /> */}

			{/* <GigAbout /> */}

			<GigPricing />

			{/* <GigReviews /> */}
		</section>
	)
}
