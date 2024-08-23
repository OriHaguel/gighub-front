import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { CategoryList } from "../cmps/CategoryList.jsx"
import React from "react"
import { AppHeader } from "../cmps/AppHeader"
import { PopularServicesCarrousel } from "../cmps/PopularServicesCarrousel"
import { AdvertArea } from "../cmps/AdvertArea"
import { gigService } from "../services/gig/gig.service.local.js"
import { MainSearchArea } from '../cmps/MainSearchArea.jsx'

export function HomePage() {
    const gigs = useSelector(state => state.gigModule.gigs)

    return (

        <div className="main-page">

            <section className="main-header">
                <AppHeader />
            </section>

            <section>
                <h1>Home sweet Home</h1>
                <h1>GigHub</h1>
                <p>Welcome to our platform GigHub! Find everything you need, just like on Fiverr.</p>
            </section>

            <section className="main-search-area">
                <MainSearchArea />
            </section>

            <section className="category-list">
                <CategoryList />
            </section>

            <section className="home-page-carrousel">
                <h1>Popular Services</h1>
                <PopularServicesCarrousel />
            </section>

            <section className="advert-area">
                <h1>Advert Area</h1>
                <AdvertArea />
            </section>

        </div>
    )
}

