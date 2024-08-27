import { Link } from "react-router-dom"
import Star from '../assets/svg/star.svg?react'
import GigImage from '../assets/img/gig-image.png'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { CloudinaryLinks } from '../cmps/CloudinaryLinks.jsx'

export function GigList({ gigs }) {

    const {
        techGig101,
        techGig102,
        techGig103,
        techGig104,
        techGig105,
        graphicsGig101,
        graphicsGig102,
        graphicsGig103,
        graphicsGig104,
        animationGig101,
        animationGig102,
        animationGig103,
        animationGig104,
        animationGig105,
        animationGig106,
        writingGig101,
        writingGig102,
        audioGig101,
        audioGig102,
        businessGig101
    } = CloudinaryLinks()

    const defaultGig = [GigImage]

    const imageMap = {
        gig101: techGig101,
        gig102: techGig102,
        gig103: techGig103,
        gig104: techGig104,
        gig105: techGig105,
        gig106: graphicsGig101,
        gig107: graphicsGig102,
        gig108: graphicsGig103,
        gig109: graphicsGig104,
        gig110: animationGig101,
        gig111: animationGig102,
        gig112: animationGig103,
        gig113: animationGig104,
        gig114: animationGig105,
        gig115: animationGig106,
        gig116: writingGig101,
        gig117: writingGig102,
        gig118: audioGig101,
        gig119: audioGig102,
        gig120: businessGig101
    }

    return (

        <section className="gig-list-container">
            {gigs.map((gig, index) => {

                const media = imageMap[`gig${index + 101}`] || defaultGig

                return (
                    <section key={gig._id} className="gig-list">
                        <Carousel
                            showArrows={true}
                            autoPlay={false}
                            infiniteLoop={true}
                            showThumbs={false}
                            dynamicHeight={false}
                            emulateTouch={false}
                        >
                            {media.map((mediaUrl, index) => (
                                mediaUrl.endsWith('.mp4') ? (
                                    <Link to={`/username/${gig._id}`} className="gig-list-img" key={index}>
                                        <div className="gig-list-img-container">
                                            <video src={mediaUrl} alt={`Gig || ${gig.title} || Video ${index + 1}`} autoPlay />
                                        </div>
                                    </Link>
                                ) : (
                                    <Link to={`/username/${gig._id}`} className="gig-list-img" key={index}>
                                        <div className="gig-list-img-container">
                                            <img src={mediaUrl} alt={`Gig || ${gig.title} || Slide ${index + 1}`} />
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