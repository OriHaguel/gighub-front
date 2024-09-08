// React
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { loadOrders, setFilterBy, loadOrder } from '../store/actions/order.actions'
import { addGig } from '../store/actions/gig.actions'

import { orderService } from '../services/order'
import { gigService } from '../services/gig'

export function Dashboard() {
    const param = useParams()
    const orders = useSelector(state => state.gigOrder.orders)
    const gigs = useSelector(state => state.gigModule.gigs)
    const [searchParams, setSearchParams] = useSearchParams()
    const filterBy = useSelector(state => state.gigOrder.filterBy)
    const defaultFilter = orderService.getFilterFromSearchParams(searchParams)

    // useEffect(() => {
    //     setFilterBy(defaultFilter)
    //     console.log("🚀 ~ useEffect ~ filterBy:", filterBy)
    // }, [])

    // useEffect(() => {
    //     setSearchParams(filterBy, { replace: true })
    //     console.log("🚀 ~ useEffect ~ filterBy:", filterBy)

    //     async function loadOrder() {
    //         try {
    //             if (filterBy.title || filterBy.price) {
    //                 await loadOrders(filterBy)
    //             }
    //         } catch (error) {
    //             console.log('🚀 ~ loadOrders ~ error:', error)
    //         }
    //     }

    //     loadOrder()
    // }, [filterBy])

    useEffect(() => {
        Promise.all([loadOrders()])
            .catch((error) => {
                console.error('Error loading orders:', error)
            })
    }, [])


    function handleAddedGig() {
        const newGig = {
            title: 'New Gig Title',
            price: 100,
            daystomake: 7,
            img:[]
        }
        addGig(newGig)

        console.log('Gig added:', newGig)
    }

    console.log('orders debug', orders)
    console.log('gigs debeug', gigs)

    return (

        <article className="dashboard-container">

            <header>
                <h1>Gigs</h1>
            </header>

            <div className="dashboard-filter">
                <ul>
                    <li><a href="">ACTIVE</a></li>
                    <li><a href="">PENDING APPROVAL</a></li>
                    <li><a href="">ACCEPTED</a></li>
                    <li><a href="">DENIED</a></li>
                </ul>
                <a href="" className="dashboard-create-gig-btn">CREATE A NEW GIG</a>
                {/* <button onClick={handleAddedGig}>Add Gig:</button> */}
            </div>

            <div className="dashboard-data-container">
                <table>

                    <thead>
                        <tr className="header-filter">
                            <td>Gig List</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr className="header-data">
                            <td className="dashboard-table-header-gig">GIG</td>
                            <td></td>
                            <td>FULL NAME</td>
                            <td>IMPRESSIONS</td>
                            <td>CLICKS</td>
                            <td>ORDERS</td>
                            <td className="dashboard-table-header-cancellation">PRICE</td>
                            <td className="dashboard-table-header-cancellation">CANCELLATIONS</td>
                            <td></td>

                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td className="dashboard-gig-img">
                                    <img src={order.miniGig.img[0]} alt="Gig" width="50" />
                                </td>
                                <td className="dashboard-title">
                                    <div>
                                        {order.miniGig.title}
                                    </div>
                                </td>
                                <td>{order.buyer.fullname}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>{order.miniGig.price}</td>
                                <td className="dashboard-dropdown">
                                    <div>
                                        <a href="#">Details</a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </article>

    )
}