import { Link } from "react-router-dom"
import Star from '../assets/svg/star.svg?react'
import GigImage from '../assets/img/gig-image.png'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { CloudinaryLinks } from '../cmps/CloudinaryLinks.jsx'

export function GigList({ gigs }) {

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

    return (

        <section className="gig-list-container">
            {gigs.map((gig, index) => {

                const media = mediaMap[`gig${index + 101}`] || defaultGig

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

