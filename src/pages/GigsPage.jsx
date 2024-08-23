import { useParams } from "react-router";
import { GigList } from "../cmps/GigList";
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadGigs } from "../store/actions/gig.actions";

export function GigPage() {
    const param = useParams()
    const gigs = useSelector(state => state.gigModule.gigs)
    const filterBy = useSelector(state => state.gigModule.filterBy)


    useEffect(() => {
        try {
            loadGigs(filterBy)
        } catch (error) {
            console.log("🚀 ~ useEffect ~ error:", error)

        }

    }, [])

    if (!gigs) return
    return <section className="gig-prev-container">
        <GigList gigs={gigs} />
    </section>
}