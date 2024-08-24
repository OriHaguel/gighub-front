import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { loadGigs, setFilterBy } from "../store/actions/gig.actions"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Star from '../assets/svg/star.svg?react'

export function GigList({ gigs }) {
    const param = useParams()

    useEffect(() => {

        setFilterBy({ category: param.gigs })


    }, []);

    return <section className="gig-list-container">
        {gigs.map(gig =>
            <section key={gig._id} className="gig-list">
                {/* <Link className="gig-list-img">img</Link> */}
                {/* <div className="gig-list-owner-name"></div> */}
                <Link className="gig-list-title"><p>{gig.title}</p></Link>
                <div className="gig-list-owner-rating"><strong><Star />4</strong></div>
                <Link className="gig-list-price"><span >From ${gig.price}</span></Link>
            </section>
        )}
    </section>
}