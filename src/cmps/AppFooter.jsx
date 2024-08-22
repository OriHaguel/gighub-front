import TwitterIcon from '../assets/svg/TwitterIcon.svg?react'
import FacebookIcon from '../assets/svg/FacebookIcon.svg?react'
import LinkedinIcon from '../assets/svg/LinkedinIcon.svg?react'
import PinterestIcon from '../assets/svg/PinterestIcon.svg?react'
import InstagramIcon from '../assets/svg/InstagramIcon.svg?react'
import TiktokIcon from '../assets/svg/TiktokIcon.svg?react'

export function AppFooter() {
	return (
		<footer className='main-container flex space-between align-center'>
			<div className='logo'>
				<h3 className='logo'>GigHub</h3>
				<p className='copy-rights'>© GigHub International Ltd. 2024</p>
			</div>
			<div className='footer-socials flex space-between'>
				<a href='https://www.tiktok.com/@fiverr' aria-label='Tiktok'>
					<TiktokIcon />
				</a>
				<a href='https://www.pinterest.com/fiverr/' aria-label='Pinterest'>
					<PinterestIcon />
				</a>
				<a href='https://www.linkedin.com/company/fiverr-com' aria-label='LinkedIn'>
					<LinkedinIcon />
				</a>
				<a href='https://www.facebook.com/Fiverr/' aria-label='Facebook'>
					<FacebookIcon />
				</a>
				<a href='https://www.instagram.com/fiverr/' aria-label='Instagram'>
					<InstagramIcon />
				</a>
				<a href='https://twitter.com/fiverr' aria-label='Twitter'>
					<TwitterIcon />
				</a>
			</div>
		</footer>
	)
}
