import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { NavLink } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Image imports
import architectureDesignPic from '../assets/img/architecture-design.webp'
import dataSciencePic from '../assets/img/data-science.webp'
import eCommercePic from '../assets/img/e-commerce.webp'
import logoDesignPic from '../assets/img/logo-design.webp'
import productPhotographyPic from '../assets/img/product-photography.webp'
import seoPic from '../assets/img/seo.webp'
import socialMediaMarketingPic from '../assets/img/social-media-marketing.webp'
import softwareDevelopmentPic from '../assets/img/software-development.webp'
import videoEditingPic from '../assets/img/video-editing.webp'
import voiceOverPic from '../assets/img/voice-over.webp'
import websiteDevelopmentPic from '../assets/img/website-development.webp'
import CarrouselControlNext from '../assets/svg/CarrouselControlNext.svg?react'
import CarrouselControlPrev from '../assets/svg/CarrouselControlPrev.svg?react'

export function PopularServicesCarrousel() {
    const popularServices = [
        { _id: 101, serviceDescription: 'Website Development', picSrc: websiteDevelopmentPic, color: '#00732e' },
        { _id: 102, serviceDescription: 'Logo Design', picSrc: logoDesignPic, color: '#ff7640' },
        { _id: 103, serviceDescription: 'SEO', picSrc: seoPic, color: '#003912' },
        { _id: 104, serviceDescription: 'Architecture & Interior Design', picSrc: architectureDesignPic, color: '#4d1727' },
        { _id: 105, serviceDescription: 'Social Media Marketing', picSrc: socialMediaMarketingPic, color: '#687200' },
        { _id: 106, serviceDescription: 'Voice Over', picSrc: voiceOverPic, color: '#421300' },
        { _id: 107, serviceDescription: 'Software Development', picSrc: softwareDevelopmentPic, color: '#254200' },
        { _id: 108, serviceDescription: 'Data Science & ML', picSrc: dataSciencePic, color: '#8f2900' },
        { _id: 109, serviceDescription: 'Product Photography', picSrc: productPhotographyPic, color: '#687200' },
        { _id: 110, serviceDescription: 'E-Commerce Marketing', picSrc: eCommercePic, color: '#00732e' },
        { _id: 111, serviceDescription: 'Video Editing', picSrc: videoEditingPic, color: '#be5272' },
        // { _id: 112, serviceDescription: "God", picSrc: "http://i0.kym-cdn.com/photos/images/newsfeed/000/600/293/a38.gif " }
    ]

    const slidesToShow = 10
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalSlides = popularServices.length

    const handleNext = () => {
        setCurrentIndex(prev => (prev + slidesToShow) % totalSlides)
    }

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - slidesToShow + totalSlides) % totalSlides)
    }

    return (
        <div className='popular-carrousel-grid'>
            {currentIndex > 0 && (
                <button onClick={handlePrev} className='carousel-control-prev'>
                    <CarrouselControlPrev className='main-carousel-chevron' />
                </button>
            )}
            <div className='popular-services-carrousel'>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    showArrows={false}
                    centerMode={true}
                    centerSlidePercentage={16}
                    selectedItem={currentIndex}
                    onChange={index => setCurrentIndex(index)}>
                    {popularServices.map(service => (
                        <NavLink to={`/services/${service.serviceDescription}`} key={service._id} className='card-link'>
                            <div className='card' style={{ backgroundColor: service.color }}>
                                <div className='card-content'>
                                    <p>{service.serviceDescription}</p>
                                </div>
                                <img src={service.picSrc} alt={service.serviceDescription} />
                            </div>
                        </NavLink>
                    ))}
                </Carousel>
            </div>
            {currentIndex < totalSlides - slidesToShow && (
                <button onClick={handleNext} className='carousel-control-next'>
                    <CarrouselControlNext className='main-carousel-chevron' />
                </button>
            )}
        </div>
    )
}

{
    /* <button onClick={handlePrev} className="carousel-control-prev"><CarrouselControlPrev /></button>
<button onClick={handleNext} className="carousel-control-next"><CarrouselControlNext /></button> */
}
