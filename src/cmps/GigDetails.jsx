import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'

import StarIcon from '../assets/svg/StarIcon.svg?react'

export function GigDetails() {
	// const [gig, setGig] = useState(null)
	// const { gigId } = useParams()

	// useEffect(() => {
	// 	if (gigId) loadGig()
	// }, [gigId])

	// function loadGig() {
	// 	gigService
	// 		.getById(gigId)
	// 		.then(gig => setGig(gig))
	// 		.catch(err => {
	// 			console.log('Had issues in gig details', err)
	// 			navigate('/gig')
	// 		})
	// }
	// if (!gig) return <div>Loading...</div>

	return <h1>details</h1>
}
