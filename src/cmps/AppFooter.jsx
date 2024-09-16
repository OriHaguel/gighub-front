import TwitterIcon from '../assets/svg/TwitterIcon.svg?react'
import FacebookIcon from '../assets/svg/FacebookIcon.svg?react'
import LinkedinIcon from '../assets/svg/LinkedinIcon.svg?react'
import PinterestIcon from '../assets/svg/PinterestIcon.svg?react'
import InstagramIcon from '../assets/svg/InstagramIcon.svg?react'
import TiktokIcon from '../assets/svg/TiktokIcon.svg?react'
import LanguageIcon from '../assets/svg/LanguageIcon.svg?react'
import AccessIcon from '../assets/svg/AccessIcon.svg?react'

import GighubLogo from '../assets/svg/Gighub_footer_logo.svg?react'

export function AppFooter() {
	return (
		<footer className="main-container app-footer">
			<div className="footer-wrapper">
				<div className="logo-container footer-left-container">
					<GighubLogo className="logo" />
					<p className="copy-rights">© GigHub International Ltd. 2024</p>
				</div>
				<div className="footer-right-container">
					<div className="footer-socials">
						<a href="https://www.tiktok.com/@fiverr" aria-label="Tiktok">
							<TiktokIcon />
						</a>
						<a href="https://www.pinterest.com/fiverr/" aria-label="Pinterest">
							<PinterestIcon />
						</a>
						<a href="https://www.linkedin.com/company/fiverr-com" aria-label="LinkedIn">
							<LinkedinIcon />
						</a>
						<a href="https://www.facebook.com/Fiverr/" aria-label="Facebook">
							<FacebookIcon />
						</a>
						<a href="https://www.instagram.com/fiverr/" aria-label="Instagram">
							<InstagramIcon />
						</a>
						<a href="https://twitter.com/fiverr" aria-label="Twitter">
							<TwitterIcon />
						</a>
					</div>
					{/* <div className='footer-misc'> */}
					{/* <div className='footer-lang'>
						<LanguageIcon />
						<p>English</p>
					</div> */}
					{/* <div className='footer-currency'>
						<p>$ USD</p>
					</div> */}
					{/* <div className='footer-accessibility'>
						<AccessIcon />
					</div> */}
					{/* </div> */}
				</div>
			</div>
		</footer>
	)
}
