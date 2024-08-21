import { AppHeader } from "../cmps/AppHeader"
import React from "react"

export function HomePage() {

    console.log('hi')
    return (
        <ul className="toys-list">
            <AppHeader />
            <section>
                {/* <h1>Home sweet Home</h1> */}
                <p>Welcome to our platform! Find everything you need, just like on Fiverr.</p>
            </section>
        </ul>
    )
}

