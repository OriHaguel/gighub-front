import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import Star from '../assets/svg/star.svg?react'
import GigImage from '../assets/img/gig-image.png'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { CloudinaryLinks } from '../cmps/CloudinaryLinks.jsx'
import CarrouselControlNext from '../assets/svg/CarrouselControlNext.svg?react'
import CarrouselControlPrev from '../assets/svg/CarrouselControlPrev.svg?react'
import HeartLogo from '../assets/svg/HeartLogo.svg?react'

export function GigList({ gigs }) {


    const mediaLinks = CloudinaryLinks()
    // console.log("🚀 ~ GigList ~ mediaLinks:", mediaLinks[0][0])


    const category = {
        programming: 'programming',
        graphics: 'graphics',
        video: 'video',
        writing: 'writing',
        music: 'music',
        business: 'business'
    };




    const renderArrowPrev = (clickHandler, hasPrev) => (
        hasPrev && (
            <button
                type="button"
                className="custom-prev-button"
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
                className="custom-next-button"
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

    return (
        <section className="gig-list-container">
            {gigs.map((gig, index) => {


                // const media = mediaLinks[category.video][index]
                // console.log("🚀 ~ {gigs.map ~ media:", media)
                // const media = mediaMap[`gig${index + 101}`] || defaultGig

                return (
                    <section key={gig._id} className="gig-list">
                        <Carousel
                            showArrows={true}
                            autoPlay={false}
                            infiniteLoop={false}
                            showThumbs={false}
                            dynamicHeight={false}
                            emulateTouch={false}
                            showStatus={false}
                            renderArrowPrev={renderArrowPrev}
                            renderArrowNext={renderArrowNext}
                        >
                            {/* <HeartLogo /> */}
                            {gig.img && gig.img.map((mediaUrl, index) => (
                                mediaUrl.endsWith('.mp4') ? (
                                    <Link to={`/username/${gig._id}`} className="gig-list-img" key={index}>
                                        <div className="gig-list-img-container">
                                            <video src={mediaUrl} alt={`Gig || ${gig.title} || Video ${index + 1}`} autoPlay muted loop />
                                            <HeartLogo className="heart-logo-overlay" />
                                        </div>
                                    </Link>
                                ) : (
                                    <Link to={`/username/${gig._id}`} className="gig-list-img" key={index}>
                                        <div className="gig-list-img-container">
                                            <img src={mediaUrl} alt={`Gig || ${gig.title} || Slide ${index + 1}`} />
                                            <HeartLogo className="heart-logo-overlay" />
                                        </div>
                                    </Link>
                                )
                            ))}
                        </Carousel>

                        <Link to={`/username/${gig._id}`} className="gig-list-owner-name"><span>Gig</span></Link>
                        <Link to={`/username/${gig._id}`} className="gig-list-title"><p>{gig.title}</p></Link>
                        <div className="gig-list-owner-rating"><strong><Star />4</strong></div>
                        <Link to={`/username/${gig._id}`} className="gig-list-price"><span>From ${gig.price}</span></Link>
                    </section>
                )
            })}
        </section>
    )
}

