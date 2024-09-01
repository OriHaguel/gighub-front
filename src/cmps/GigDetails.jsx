import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'
import { SellerLevel } from './SellerLevel.jsx'
import { SellerPro } from './SellerPro.jsx'
import Star from '../assets/svg/star.svg?react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { CloudinaryLinks } from '../cmps/CloudinaryLinks.jsx'
import GigImage from '../assets/img/gig-image.png'
import CarrouselControlNext from '../assets/svg/CarrouselControlNext.svg?react'
import CarrouselControlPrev from '../assets/svg/CarrouselControlPrev.svg?react'

export function GigDetails() {
	const [gig, setGig] = useState(null)
	const { gigId } = useParams()
	const navigate = useNavigate()

	const mediaLinks = CloudinaryLinks()

	const mediaMap = {
		gig101: mediaLinks.techGig101,
		gig102: mediaLinks.techGig102,
		gig103: mediaLinks.techGig103,
		gig104: mediaLinks.techGig104,
		gig105: mediaLinks.techGig105,
		gig106: mediaLinks.graphicsGig101,
		gig107: mediaLinks.graphicsGig102,
		gig108: mediaLinks.graphicsGig103,
		gig109: mediaLinks.graphicsGig104,
		gig110: mediaLinks.animationGig101,
		gig111: mediaLinks.animationGig102,
		gig112: mediaLinks.animationGig103,
		gig113: mediaLinks.animationGig104,
		gig114: mediaLinks.animationGig105,
		gig115: mediaLinks.animationGig106,
		gig116: mediaLinks.writingGig101,
		gig117: mediaLinks.writingGig102,
		gig118: mediaLinks.audioGig101,
		gig119: mediaLinks.audioGig102,
		gig120: mediaLinks.businessGig101
	}

	const tempGigPreview = 'gig102'
	const gigMedia = mediaMap[tempGigPreview]

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

	const renderArrowPrev = (clickHandler, hasPrev) => (
		hasPrev && (
			<button
				type="button"
				className="detail-prev-button"
				onClick={(e) => {
					e.stopPropagation()
					console.log("Prev clicked")
					clickHandler()
				}}
			>
				<CarrouselControlPrev className='main-carousel-chevron' />
			</button>
		)
	)

	const renderArrowNext = (clickHandler, hasNext) => (
		hasNext && (
			<button
				type="button"
				className="detail-next-button"
				onClick={(e) => {
					e.stopPropagation()
					console.log("Next clicked")
					clickHandler()
				}}
			>
				<CarrouselControlNext className='main-carousel-chevron' />
			</button>
		)
	)

	if (!gig) return <div>Loading...</div>

	return (
		<section className='gig-overview'>

			<h1 className='gig-title'>{gig.title}</h1>
			<div className='owner-details'>
				<img
					className='owner-image'
					src={gig.ownerImage || 'fallback-image.png'}
					alt={gig.owner || 'Owner'}
				/>
				<div className='owner-details-container'>
					<div className='first-line'>
						<p className='owner-name'>{gig.owner}</p>
						{gig.ownerPro && <SellerPro />}
						<SellerLevel />
					</div>
					<div className='second-line'>
						<div className='rating-container'>
							<div className='star-container'>
								<Star />
							</div>
							<p>{gig.ownerRating}</p>
							<p className='light-text'>{gig.ownerOrders} orders in queue</p>
						</div>
					</div>
					<div className='gig-detail-carousel'>
						<Carousel
							showArrows={true}
							autoPlay={false}
							infiniteLoop={true}
							showThumbs={true}
							dynamicHeight={false}
							emulateTouch={false}
							showIndicators={false}
							showStatus={false}
							renderArrowPrev={renderArrowPrev}
							renderArrowNext={renderArrowNext}

						>

							{gig.img && gig.img.map((mediaUrl, index) => (
								mediaUrl.endsWith('.mp4') ? (
									<div className="gig-list-vid-container" key={index}>
										<video src={mediaUrl} alt={`Gig Video ${index + 1}`} controls />
									</div>
								) : (
									<div className="gig-list-img-container" key={index}>
										<img src={mediaUrl} alt={`Gig Image ${index + 1}`} />
									</div>
								)
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	)
}
