// React
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Image Imports
import CarrouselControlNext from '../assets/svg/CarrouselControlNext.svg?react'
import CarrouselControlPrev from '../assets/svg/CarrouselControlPrev.svg?react'
import Star from '../assets/svg/star.svg?react'
import GigImage from '../assets/img/gig-image.png'
import HeartLogo from '../assets/svg/HeartLogo.svg?react'

export function GigList({ gigs }) {
	const videoRefs = useRef({})

	const setVideoRef = (index, element) => {
		videoRefs.current[index] = element
	}

	const handleMouseEnter = index => {
		if (videoRefs.current[index]) videoRefs.current[index].play()
	}

	const handleMouseLeave = index => {
		if (videoRefs.current[index]) videoRefs.current[index].pause()
	}

	const renderArrowPrev = (clickHandler, hasPrev) =>
		hasPrev && (
			<button
				type='button'
				className='custom-prev-button'
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
				className='custom-next-button'
				onClick={e => {
					e.stopPropagation()
					console.log('Next clicked')
					clickHandler()
				}}>
				<CarrouselControlNext className='main-carousel-chevron' />
			</button>
		)

	return (
		<section className='gig-list-container'>
			{gigs.map((gig, gigIndex) => {
				if (gig.img.length === 0) {
					// gig.img = [GigImage, GigImage, GigImage]
					return
				}

				return (
					<section key={gig._id} className='gig-list'>
						<Carousel
							showArrows={true}
							autoPlay={false}
							infiniteLoop={false}
							showThumbs={false}
							dynamicHeight={false}
							emulateTouch={false}
							showStatus={false}
							renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext}>
							{gig.img.map((mediaUrl, mediaIndex) => {
								return mediaUrl.endsWith('.mp4') ? (
									<Link to={`/username/${gig._id}`} className='gig-list-img' key={mediaIndex}>
										<div className='gig-list-img-container'>
											<video ref={element => setVideoRef(`${gigIndex}-${mediaIndex}`, element)} src={mediaUrl} alt={`Gig || ${gig.title} || Video ${mediaIndex + 1}`} muted loop onMouseEnter={() => handleMouseEnter(`${gigIndex}-${mediaIndex}`)} onMouseLeave={() => handleMouseLeave(`${gigIndex}-${mediaIndex}`)} />
											{/* <HeartLogo className='heart-logo-overlay' /> */}
										</div>
									</Link>
								) : (
									<Link to={`/username/${gig._id}`} className='gig-list-img' key={mediaIndex}>
										<div className='gig-list-img-container'>
											<img src={mediaUrl} alt={`Gig || ${gig.title} || Slide ${mediaIndex + 1}`} />
											{/* <HeartLogo className='heart-logo-overlay' /> */}
										</div>
									</Link>
								)
							})}
						</Carousel>

						<Link to={`/username/${gig._id}`} className='gig-list-owner-name'>
							<img src={gig.owner.imgUrl} className='gig-list-owner-img' />
							<span>{gig.owner.fullname}</span>
						</Link>
						<Link to={`/username/${gig._id}`} className='gig-list-title'>
							<p>{gig.title}</p>
						</Link>
						<div className='gig-list-owner-rating'>
							<Star className='star' />
							{gig.owner.rate}
						</div>
						<Link to={`/username/${gig._id}`} className='gig-list-price'>
							<span>From ${gig.price}</span>
						</Link>
					</section>
				)
			})}
		</section>
	)
}
