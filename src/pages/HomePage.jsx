import React from "react"
import { AppHeader } from "../cmps/AppHeader"
import { PopularServicesCarrousel } from "../cmps/PopularServicesCarrousel"

export function HomePage() {

    console.log('hi')
    return (

        <div className="main-page">

            <AppHeader />

            <section>
                <h1>Home sweet Home</h1>
                <p>Welcome to our platform! Find everything you need, just like on Fiverr.</p>
            </section>

            <section className="home-page-carrousel">
                <p className="services-header">Popular Services</p>
                <PopularServicesCarrousel />
            </section>

        </div>
    )
}

