import { useEffect, useState, useRef } from "react"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'
import ClockLogo from '../assets/svg/DaystomakeLogo.svg?react'
import RevisionsLogo from '../assets/svg/RevisionsLogo.svg?react'
import Vlogo from '../assets/svg/V.svg?react'
import Arrowlogo from '../assets/svg/Rightarrowbtn.svg?react'
import { OrderPage } from './OrderPage.jsx'
export function GigPricing({ gig, onContinue }) {
	const [selectedPackage, setSelectedPackage] = useState('Basic')

	const packages = {
		Basic: {
			price: gig.price,
			daysToMake: 7,
			revisions: 2,
			pages: 3,
			assets: 1
		},
		Standard: {
			price: gig.price * 1.2,
			daysToMake: 5,
			revisions: 4,
			pages: 5,
			assets: 2
		},
		Premium: {
			price: gig.price * 1.5,
			daysToMake: 3,
			revisions: 6,
			pages: 7,
			assets: 3
		}
	}

	const currentPackage = packages[selectedPackage]

	const handlePackageSelect = (pkg) => {
		setSelectedPackage(pkg)
	}
	console.log('lol test',currentPackage)
	const handleContinue = () => {
	
		onContinue(currentPackage)

	}

	return (
		<div className='package-tabs'>
			<div className='nav-container'>
				{Object.keys(packages).map(pkg => (
					<label
						key={pkg}
						className={selectedPackage === pkg ? 'active' : ''}
						onClick={() => handlePackageSelect(pkg)}
					>
						{pkg}
					</label>
				))}
			</div>
			<div className='package-container'>
				<div className='package-content'>
					<header className='header-default'>
						<h3>
							<b>{selectedPackage} Design Package</b>
							<span>${currentPackage.price}</span>
						</h3>
						<p>Simple mobile app design, {currentPackage.pages} pages/screens</p>
					</header>
					<article>
						<div className='additional-info'>
							<div className='package-days-to-make'>
								<ClockLogo />
								<b> {currentPackage.daysToMake}-day delivery</b>
							</div>
							<div className='revisions-wrapper'>
								<RevisionsLogo />
								<b> {currentPackage.revisions} Revisions</b>
							</div>
						</div>
						<ul>
							<li>
								<span>
									<Vlogo />
								</span>{' '}
								{currentPackage.pages} pages/screens
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
								{currentPackage.assets} custom assets
							</li>
						</ul>
					</article>
				</div>
			</div>
			<footer className='tab-footer'>
				<button className='footer-btn-continue' onClick={handleContinue}>
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