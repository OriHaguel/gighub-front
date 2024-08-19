import React from 'react'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'
import { GigDetails } from './pages/GigDetails.jsx'
import { UserDetails } from './pages/UserDetails'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { GigIndex } from './pages/GigIndex.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />

            <main>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="car" element={<GigIndex />} />
                    <Route path="car/:carId" element={<GigDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="admin" element={<AdminIndex />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}


