import { useParams } from "react-router";
import { GigList } from "../cmps/GigList";
import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import { loadGigs } from "../store/actions/gig.actions";
import { MostPopularCarrousel } from "../cmps/MostPopularCarrousel";
import GigImage from '../assets/img/gig-image.png'
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'


export function GigPage() {
    const param = useParams()
    const gigs = useSelector(state => state.gigModule.gigs)
    const filterBy = useSelector(state => state.gigModule.filterBy)
    const [activeDropdown, setActiveDropdown] = useState(null)


    useEffect(() => {
        try {
            loadGigs(filterBy)
        } catch (error) {
            console.log("🚀 ~ useEffect ~ error:", error)

        }

    }, [])

    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null)
        } else {
            setActiveDropdown(dropdownName)
        }
    }

    if (!gigs) return

    return (

        <div className="gig-page">
            <h1>Gig Page</h1>
            <section className="most-carousel-section">
                <MostPopularCarrousel />
            </section>

            <section className="gig-sorting">
                <div>Sorting Section...</div>
                <div className="top-filters">

                    <div className="filter">
                        <button className="filter-button" onClick={() => toggleDropdown('serviceOptions')}>
                            <p className="filter-label">Service options</p>
                            <span className="chevron-icon-down" aria-hidden="true">
                                <ChevronIcon />
                            </span>
                        </button>
                        {activeDropdown === 'serviceOptions' && (
                            <div className="dropdown-content">
                                <ul>
                                    <li><button>Option 1</button></li>
                                    <li><button>Option 2</button></li>
                                    <li><button>Option 3</button></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="filter">
                        <button className="filter-button" onClick={() => toggleDropdown('sellerDetails')}>
                            <p className="filter-label">Seller details</p>
                            <span className="chevron-icon-down" aria-hidden="true">
                                <ChevronIcon />
                            </span>
                        </button>
                        {activeDropdown === 'sellerDetails' && (
                            <div className="dropdown-content">
                                <ul>
                                    <li><button>Top Rated</button></li>
                                    <li><button>Level One</button></li>
                                    <li><button>Level Two</button></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="filter">
                        <button className="filter-button" onClick={() => toggleDropdown('budget')}>
                            <p className="filter-label">Budget</p>
                            <span className="chevron-icon-down" aria-hidden="true">
                                <ChevronIcon />
                            </span>
                        </button>
                        {activeDropdown === 'budget' && (
                            <div className="dropdown-content">
                                <ul>
                                    <li><button>$5 - $50</button></li>
                                    <li><button>$51 - $100</button></li>
                                    <li><button>$101 - $500</button></li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="filter">
                        <button className="filter-button" onClick={() => toggleDropdown('deliveryTime')}>
                            <p className="filter-label">Delivery time</p>
                            <span className="chevron-icon-down" aria-hidden="true">
                                <ChevronIcon />
                            </span>
                        </button>
                        {activeDropdown === 'deliveryTime' && (
                            <div className="dropdown-content">
                                <ul>
                                    <li><button>24 Hours</button></li>
                                    <li><button>3 Days</button></li>
                                    <li><button>7 Days</button></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="gig-prev-container">
                <GigList gigs={gigs} />
            </section>

            <section className="pagination">
                <div>pages....</div>
            </section>
        </div>
    )
}