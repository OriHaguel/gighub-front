// React
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { loadOrders, setFilterBy, loadOrder, updateOrder } from '../store/actions/order.actions'
import { addGig } from '../store/actions/gig.actions'

import { orderService } from '../services/order'
import { gigService } from '../services/gig'
import { userService } from '../services/user'

export function Dashboard() {
	const param = useParams()
	const orders = useSelector(state => state.gigOrder.orders)
	const [orderStatus, setOrderStatus] = useState('pending')
	const gigs = useSelector(state => state.gigModule.gigs)
	const [searchParams, setSearchParams] = useSearchParams()
	const filterBy = useSelector(state => state.gigOrder.filterBy)
	const defaultFilter = orderService.getFilterFromSearchParams(searchParams)

	// console.log("🚀 ~ Dashboard ~ orders:", { ...orders[0], status: 'accepted' })

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
		Promise.all([loadOrders()]).catch(error => {
			console.error('Error loading orders:', error)
		})
	}, [])

	// function handleAddedGig() {
	//     const newGig = {
	//         title: 'New Gig Title',
	//         price: 100,
	//         daystomake: 7,
	//         img:[]
	//     }
	//     addGig(newGig)

	//     console.log('Gig added:', newGig)
	// }

	// console.log("🚀 ~ Dashboard ~ orders:", orders.filter(order => order.status === orderStatus))
	function changeOrderStatus(order, status) {
		updateOrder({ ...order, status })
	}
	// console.log("🚀 ~ changeOrderStatus ~ changeOrderStatus:", changeOrderStatus(orders[0], 'accepted'))

	return (
		// <div className='main-container'>
		<section className='main-container dashboard-page-container'>
			<article className='dashboard-container'>
				<header>
					<h1>Gigs</h1>
				</header>

				<div className='dashboard-filter'>
					<ul>
						<li>
							<p className={`${orderStatus === 'active' ? 'dashboard-black tab-1' : ''}`} onClick={() => setOrderStatus('active')}>
								Active
								<span className={orders.filter(order => order.status === 'active').filter(order => order.seller._id === userService.getLoggedinUser()._id).length === 0 ? 'clear-span' : ''}>{orders.filter(order => order.status === 'active').filter(order => order.seller._id === userService.getLoggedinUser()._id).length}</span>
							</p>
						</li>
						<li>
							<p className={`${orderStatus === 'pending' ? 'dashboard-black tab-2' : ''}`} onClick={() => setOrderStatus('pending')}>
								Pending Approval
								<span className={orders.filter(order => order.status === 'pending').filter(order => order.seller._id === userService.getLoggedinUser()._id).length === 0 ? 'clear-span' : ''}>{orders.filter(order => order.status === 'pending').filter(order => order.seller._id === userService.getLoggedinUser()._id).length}</span>
							</p>
						</li>
						<li>
							<p className={`${orderStatus === 'accepted' ? 'dashboard-black tab-3' : ''}`} onClick={() => setOrderStatus('accepted')}>
								Accepted
								<span className={orders.filter(order => order.status === 'accepted').filter(order => order.seller._id === userService.getLoggedinUser()._id).length === 0 ? 'clear-span' : ''}>{orders.filter(order => order.status === 'accepted').filter(order => order.seller._id === userService.getLoggedinUser()._id).length}</span>
							</p>
						</li>
						<li>
							<p className={`${orderStatus === 'denied' ? 'dashboard-black tab-4' : ''}`} onClick={() => setOrderStatus('denied')}>
								Denied
								<span className={orders.filter(order => order.status === 'denied').filter(order => order.seller._id === userService.getLoggedinUser()._id).length === 0 ? 'clear-span' : ''}>{orders.filter(order => order.status === 'denied').filter(order => order.seller._id === userService.getLoggedinUser()._id).length}</span>
							</p>
						</li>
					</ul>
					{/* <a href='' className='dashboard-create-gig-btn'>
						CREATE A NEW GIG
					</a> */}
					{/* <button onClick={handleAddedGig}>Add Gig:</button> */}
				</div>

				<div className='dashboard-data-container'>
					<table>
						<thead>
							<tr className='header-filter hide-mobile'>
								<td>Gig List</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr className='header-data hide-mobile'>
								<td className='dashboard-table-header-gig'>GIG</td>
								<td></td>
								{/* <td>FULL NAME</td> */}
								<td>Impressions</td>
								<td>Clicks</td>
								<td>Orders</td>
								{/* <td className="dashboard-table-header-cancellation">PRICE</td> */}
								{/* <td className="dashboard-table-header-cancellation">CANCELLATIONS</td> */}
								<td></td>
							</tr>
						</thead>

						<tbody>
							{orders
								.filter(order => order.status === orderStatus)
								.map(
									order =>
										order.seller._id === userService.getLoggedinUser()._id && (
											<tr className='gig-dashboard-item' key={order._id}>
												<td className='dashboard-gig-img'>
													<img src={order.miniGig.img[0]} alt='Gig' width='50' />
												</td>
												<td className='dashboard-title'>
													<div>{order.miniGig.title}</div>
												</td>
												{/* <td>{order.buyer.fullname}</td> */}
												<td className='hide-mobile'>0</td>
												<td className='hide-mobile'>0</td>
												<td className='hide-mobile'>0</td>
												{/* <td>{order.miniGig.price}</td> */}
												<td className='dashboard-dropdown'>
													<div className='button-container'>
														<button className='accept-button button' onClick={() => changeOrderStatus(order, 'accepted')}>
															Accept
														</button>
														<button className='decline-button button' onClick={() => changeOrderStatus(order, 'denied')}>
															Decline
														</button>
													</div>
												</td>
											</tr>
										)
								)}
						</tbody>
					</table>
				</div>
			</article>
		</section>

		// </div>
	)
}
