import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { GigDetails } from '../cmps/GigDetails'
import { GigCarrousel } from '../cmps/GigCarrousel'
import { GigAbout } from '../cmps/GigAbout'
import { GigPricing } from '../cmps/GigPricing'
import { GigReviewsList } from '../cmps/GigReviewsList'
import { OrderPage } from '../cmps/OrderPage'
import { gigService } from '../services/gig'
import { PackageBreakdown } from '../cmps/PackageBreakdown.jsx'

export function GigDetailsPage() {
	const param = useParams()
	const [gig, setGig] = useState()
	const [isOrderPageOpen, setIsOrderPageOpen] = useState(false)
	const [selectedPackage, setSelectedPackage] = useState(null)
	const navigate = useNavigate()
	useEffect(() => {
		loadGig()
	}, [param.gigId])

	async function loadGig() {
		try {
			const gig = await gigService.getById(param.gigId)
			setGig(gig)
		} catch (error) {
			navigate('/gigs')
			console.log('🚀 ~ loadGig ~ error:', error)
		}
	}

	const toggleOrderPage = pkg => {
		setSelectedPackage(pkg)
		setIsOrderPageOpen(!isOrderPageOpen)
	}

	if (!gig) return
	return (
		<section className='main-detail-page main-container'>
			<div className='gig-details-page-container grid-2'>
				<GigDetails />
				<GigCarrousel />
				<GigAbout />
				<PackageBreakdown gig={gig} />
				<GigReviewsList />
			</div>
			<div className='pricing-container grid-4'>
				<GigPricing gig={gig} onContinue={toggleOrderPage} />
			</div>
			{isOrderPageOpen && <OrderPage gig={gig} selectedPackage={selectedPackage} onClose={toggleOrderPage} />}
		</section>
	)
}
