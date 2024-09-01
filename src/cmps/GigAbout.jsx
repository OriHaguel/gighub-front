import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'

export function GigAbout() {
	const param = useParams()
	const [gig, setGig] = useState(null)

	useEffect(() => {
		loadGig()
	}, [param.gigId])

	async function loadGig() {
		try {
			const gig = await gigService.getById(param.gigId)
			setGig(gig)
		} catch (error) {
			console.log('🚀 ~ loadGig ~ error:', error)
			// Assuming navigate is a function to redirect to another page
			// navigate('/gigs')
		}
	}

	if (!gig)
		return (
			<section className='about-details'>
				<h1 className='about-gig'>Loading...</h1>
			</section>
		)

	return (
		<section className='about-details'>
			<h1 className='about-gig'>About this gig</h1>
			<p>{gig.aboutGig}</p>
		</section>
	)
}
