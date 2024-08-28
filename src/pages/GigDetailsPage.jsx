import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { GigDetails } from '../cmps/GigDetails'
import { GigCarrousel } from '../cmps/GigCarrousel'
import { GigAbout } from '../cmps/GigAbout'
import { GigPricing } from '../cmps/GigPricing'
import { GigReviews } from '../cmps/GigReviews'
import { gigService } from '../services/gig/gig.service.local'

export function GigDetailsPage() {
	const param = useParams()
	const [gig, setGig] = useState();


	useEffect(() => {

		loadGig()

	}, [param.gigId])


	async function loadGig() {
		try {
			const gig = await gigService.getById(param.gigId)
			setGig(gig)
		} catch (error) {
			console.log("🚀 ~ loadGig ~ error:", error)
			navigate('/gigs')
		}
	}
	if (!gig) return
	return (
		<section className='main-detail-container'>
			<GigDetails />

			{/* <GigCarrousel /> */}

			{/* <GigAbout /> */}

			<GigPricing gig={gig} />
			{/* <GigReviews /> */}

		</section>
	)
}
