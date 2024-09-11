import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Carrousel
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import GigImage from '../assets/img/gig-image.png'
import CarrouselControlNext from '../assets/svg/CarrouselControlNext.svg?react'
import CarrouselControlPrev from '../assets/svg/CarrouselControlPrev.svg?react'
import { gigService } from '../services/gig'

export function GigCarrousel() {
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

	const renderArrowPrev = (clickHandler, hasPrev) =>
		hasPrev && (
			<button
				type='button'
				className='detail-prev-button'
				onClick={e => {
					e.stopPropagation()
					console.log('Prev clicked')
					clickHandler()
				}}>
				<CarrouselControlPrev className='main-carousel-chevron' />
			</button>
		)

	const renderArrowNext = (clickHandler, hasNext) =>
		hasNext && (
			<button
				type='button'
				className='detail-next-button'
				onClick={e => {
					e.stopPropagation()
					console.log('Next clicked')
					clickHandler()
				}}>
				<CarrouselControlNext className='main-carousel-chevron' />
			</button>
		)

	if (!gig) return <div>Loading...</div>

	if (gig.img.length === 0) {
		gig.img = [GigImage, GigImage, GigImage]
	}

	return (
		<section className='gig-detail-carousel grid-row-1-mobile'>
			<Carousel
				showArrows={true}
				autoPlay={false}
				infiniteLoop={true}
				showThumbs={true}
				dynamicHeight={false}
				emulateTouch={false}
				showIndicators={false} // TODO: make this look like it belongs in the app and make it dynamic
				showStatus={false}
				renderArrowPrev={renderArrowPrev}
				renderArrowNext={renderArrowNext}
				renderThumbs={() =>
					gig.img.map((mediaUrl, index) =>
						mediaUrl.endsWith('.mp4') ? (
							<video
								key={index}
								src={mediaUrl}
								alt={`Thumbnail Video ${index + 1}`}
								style={{ width: '100px', height: '60px', objectFit: 'cover' }}
								muted
							/>
						) : (
							<img
								key={index}
								src={mediaUrl}
								alt={`Thumbnail Image ${index + 1}`}
								style={{ width: '100px', height: '60px', objectFit: 'cover' }}
							/>
						)
					)
				}>
				{gig.img &&
					gig.img.map((mediaUrl, index) =>
						mediaUrl.endsWith('.mp4') ? (
							<div className='gig-list-vid-container' key={index}>
								<video src={mediaUrl} alt={`Gig Video ${index + 1}`} controls />
							</div>
						) : (
							<div className='gig-list-img-container' key={index}>
								<img src={mediaUrl} alt={`Gig Image ${index + 1}`} />
							</div>
						)
					)}
			</Carousel>
		</section>
	)
}
