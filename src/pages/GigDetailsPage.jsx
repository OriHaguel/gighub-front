import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { GigDetails } from '../cmps/GigDetails'
import { GigCarrousel } from '../cmps/GigCarrousel'
import { GigAbout } from '../cmps/GigAbout'
import { GigPricing } from '../cmps/GigPricing'
import { GigReviewsList } from '../cmps/GigReviewsList'
import { gigService } from '../services/gig/gig.service.local'
import { OrderPage } from '../cmps/OrderPage'

export function GigDetailsPage() {
	const param = useParams()
	const [gig, setGig] = useState()
	const [isOrderPageOpen, setIsOrderPageOpen] = useState(false)

	useEffect(() => {
		loadGig()
	}, [param.gigId])

	async function loadGig() {
		try {
			const gig = await gigService.getById(param.gigId)
			setGig(gig)
		} catch (error) {
			console.log('🚀 ~ loadGig ~ error:', error)
			navigate('/gigs')
		}
	}

	const toggleOrderPage = () => {
		setIsOrderPageOpen(!isOrderPageOpen)
	}

	if (!gig) return
	return (
		<section className='main-detail-page'>
			<div className='gig-details-page-container grid-2'>
				<GigDetails />
				<GigCarrousel />
				<GigAbout />
				<GigReviewsList />
			</div>
			<div className='pricing-container grid-4'>
				<GigPricing gig={gig} onContinue={toggleOrderPage} />
			</div>
			{isOrderPageOpen && <OrderPage onClose={toggleOrderPage} />}
		</section>
	)
}
