import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink } from 'react-router-dom'

export function PopularServicesCarrousel() {

    const tempImages = [
        {
            "id": "146",
            "service": "Website Development",
            "width": 5000,
            "height": 3333,
            "url": "https://unsplash.com/photos/GG0jOrmwqtw",
            "download_url": "https://picsum.photos/id/146/5000/3333"
        },
        {
            "id": "147",
            "service": "Logo Design",
            "width": 2448,
            "height": 2448,
            "url": "https://unsplash.com/photos/OODWPtfXAF0",
            "download_url": "https://picsum.photos/id/147/2448/2448"
        },
        {
            "id": "149",
            "service": "SEO",
            "width": 3454,
            "height": 2288,
            "url": "https://unsplash.com/photos/revxuIor0nY",
            "download_url": "https://picsum.photos/id/149/3454/2288"
        },
        {
            "id": "151",
            "service": "Architecture & Interior Design",
            "width": 4288,
            "height": 3216,
            "url": "https://unsplash.com/photos/xPfj_Kdcal4",
            "download_url": "https://picsum.photos/id/151/4288/3216"
        },
        {
            "id": "152",
            "service": "God",
            "width": 4000,
            "height": 4000,
            "url": "http://i0.kym-cdn.com/photos/images/newsfeed/000/600/293/a38.gif "
        },
        {
            "id": "155",
            "service": "Social Media Marketing",
            "width": 3264,
            "height": 2176,
            "url": "https://unsplash.com/photos/4f7r1LuPYj8",
            "download_url": "https://picsum.photos/id/155/3264/2176"
        },
        {
            "id": "156",
            "service": "Voice Over",
            "width": 2177,
            "height": 3264,
            "url": "https://unsplash.com/photos/iRyGmA_no2Q",
            "download_url": "https://picsum.photos/id/156/2177/3264"
        },
        {
            "id": "157",
            "service": "Software Development",
            "width": 5000,
            "height": 3914,
            "url": "https://unsplash.com/photos/HFbRnCjWHsk",
            "download_url": "https://picsum.photos/id/157/5000/3914"
        },
        {
            "id": "158",
            "service": "Data Science & ML",
            "width": 4836,
            "height": 3224,
            "url": "https://unsplash.com/photos/MRxD-J9-4ps",
            "download_url": "https://picsum.photos/id/158/4836/3224"
        }

    ]
    return (
        <div className="popular-services-carrousel">
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                emulateTouch={true}
                centerMode={true}
                centerSlidePercentage={30}
                swipeable={true}
            >
                {tempImages.map(image => (
                    <NavLink to={`/services/${image.service}`} key={image.id} className="card-link">
                        <div className="card">
                            <img
                                src={image.download_url || image.url}
                                alt={image.service}
                            />
                            <div className="card-content">
                                <p>{image.service}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </Carousel>
        </div>
    )
}