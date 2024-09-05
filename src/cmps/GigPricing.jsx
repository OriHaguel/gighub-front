import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ClockLogo from '../assets/svg/DaystomakeLogo.svg?react'
import RevisionsLogo from '../assets/svg/RevisionsLogo.svg?react'
import Vlogo from '../assets/svg/V.svg?react'
import Arrowlogo from '../assets/svg/Rightarrowbtn.svg?react'
import { OrderPage } from './OrderPage.jsx'
export function GigPricing({ gig, onContinue }) {
	return (
		<div className='package-tabs'>
			<div className='nav-container'>
				<label htmlFor=''>Basic</label>
				<label htmlFor=''>Standart</label>
				<label htmlFor=''>Premium</label>
			</div>
			<div className='package-container'>
				<div className='package-content'>
					<header className='header-default'>
						<h3>
							<b>Basic Design Package</b>
							<span>${gig.price}</span>
						</h3>
						<p>Simple mobile app design, 3 pages / screens</p>
					</header>
					<article>
						<div className='additional-info'>
							<div className='package-days-to-make'>
								<ClockLogo />
								<b> {gig.daysToMake}-day delivery</b>
							</div>
							<div className='revisions-wrapper'>
								<RevisionsLogo />
								<b> 2 Revisions</b>
							</div>
						</div>
						<ul>
							<li>
								<span>
									<Vlogo />
								</span>{' '}
								3 pages/screens
							</li>
							<li>
								<span>
									<Vlogo />
								</span>{' '}
								Include source file
							</li>
							<li>
								<span>
									<Vlogo />
								</span>{' '}
								1 custom asset
							</li>
						</ul>
					</article>
				</div>
			</div>
			<footer className='tab-footer'>
				<button className='footer-btn-continue' onClick={onContinue}>
					Continue{' '}
					<span>
						<Arrowlogo />
					</span>
				</button>
				<button className='compare-btn'>Compare packages</button>
			</footer>
		</div>
	)
}
