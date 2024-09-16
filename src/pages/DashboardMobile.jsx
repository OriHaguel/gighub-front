import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { loadOrders, updateOrder } from '../store/actions/order.actions'
import { userService } from '../services/user'

export function DashboardMobile() {
	const param = useParams()
	const orders = useSelector(state => state.gigOrder.orders)
	const gigs = useSelector(state => state.gigModule.gigs)
	const [orderStatus, setOrderStatus] = useState('pending')
	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				await loadOrders()
			} catch (error) {
				console.error('Error loading orders:', error)
			}
		}

		fetchOrders()
	}, [])

	const changeOrderStatus = async (order, status) => {
		try {
			await updateOrder({ ...order, status })
		} catch (error) {
			console.error('Error updating order status:', error)
		}
	}

	const filteredOrders = orders.filter(order => order.status === orderStatus && order.seller._id === userService.getLoggedinUser()._id)

	return (
		<section className='main-container dashboard-page-container'>
			<div>
				<article className='dashboard-container'>
					<header>
						<h1>Manage Orders</h1>
					</header>

					{/* Mobile */}
					<div className='dashboard-filter-mobile dashboard-filter mobile-only'>
						<ul className='flex align-center space-between'>
							<li>
								<p className={orderStatus === 'active' ? 'dashboard-black mobile-tab-1' : ''} onClick={() => setOrderStatus('active')}>
									Active
								</p>
							</li>
							<li>
								<p className={orderStatus === 'pending' ? 'dashboard-black mobile-tab-2' : ''} onClick={() => setOrderStatus('pending')}>
									Pending
								</p>
							</li>
							<li>
								<p className={orderStatus === 'accepted' ? 'dashboard-black mobile-tab-3' : ''} onClick={() => setOrderStatus('accepted')}>
									Accepted
								</p>
							</li>
							<li>
								<p className={orderStatus === 'denied' ? 'dashboard-black mobile-tab-4' : ''} onClick={() => setOrderStatus('denied')}>
									Denied
								</p>
							</li>
						</ul>
					</div>

					<div className='main-table mobile-only'>
						{filteredOrders.map(order => (
							<div className='mobile-container flex column' key={order._id}>
								<div className='info-container flex row'>
									<div className='mobile-img'>
										<img src={order.miniGig.img[0]} alt='Gig' width='50' />
									</div>
									<div className='mobile-title'>{order.miniGig.title}</div>
								</div>
								<div className='button-container flex row'>
									<button className='accept-button button' onClick={() => changeOrderStatus(order, 'accepted')}>
										Accept
									</button>
									<button className='decline-button button' onClick={() => changeOrderStatus(order, 'denied')}>
										Decline
									</button>
								</div>
							</div>
						))}
					</div>
				</article>
			</div>
		</section>
	)
}
