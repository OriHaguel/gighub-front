import { SearchInput } from './SearchInput'

// Image imports
import hero from '../assets/img/hero-section.jpeg'
import MetaLogo from '../assets/svg/MetaLogo.svg?react'
import GoogleLogo from '../assets/svg/GoogleLogo.svg?react'
import NetflixLogo from '../assets/svg/NetflixLogo.svg?react'
import PAndGLogo from '../assets/svg/pAndGLogo.svg?react'
import PayPalLogo from '../assets/svg/PayPalLogo.svg?react'
import PayoneerLogo from '../assets/svg/PayoneerLogo.svg?react'
// import SearchLogo from '../assets/svg/searchLogo.svg?react'

export function MainSearchArea() {
	return (
		<div className={`hero-container ${window.innerWidth <= 600 ? 'main-container' : ''}`}>
			<img src={hero} alt='Green-Hero' className='hero-image' />
			<div className='hero-content'>
				<div className='main-hero'>
					<h1 className='promotion-txt'>
						Scale your <br className='line-break' /> professional workforce with <i className='freelancers-txt'>freelancers</i>
					</h1>

					<SearchInput />
				</div>
				<div className='logo-section'>
					<ul className='logo-list'>
						<p>Trusted By:</p>
						<li>
							<MetaLogo />
						</li>
						<li>
							<GoogleLogo />
						</li>
						<li>
							<NetflixLogo />
						</li>
						<li>
							<PAndGLogo />
						</li>
						<li>
							<PayPalLogo />
						</li>
						<li>
							<PayoneerLogo />
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
