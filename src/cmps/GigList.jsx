
import { useParams } from "react-router"
import { loadGigs, setFilterBy } from "../store/actions/gig.actions"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Star from '../assets/svg/star.svg?react'
import GigImage from '../assets/img/gig-image.png'
export function GigList({ gigs }) {


    return <section className="gig-list-container">
        {gigs.map(gig =>
            <section key={gig._id} className="gig-list">


                <Link to={`/username/${gig._id}`} className="gig-list-img">
                    <div className="gig-list-img-container">
                        <img src={GigImage} />
                    </div></Link>
                <Link to={`/username/${gig._id}`} className="gig-list-owner-name"><span >walla lo yode'a</span></Link>
                <Link to={`/username/${gig._id}`} className="gig-list-title"><p>{gig.title}</p></Link>
                <div className="gig-list-owner-rating"><strong><Star />4</strong></div>
                <Link to={`/username/${gig._id}`} className="gig-list-price"><span >From ${gig.price}</span></Link>

            </section>
        )}
    </section>
}