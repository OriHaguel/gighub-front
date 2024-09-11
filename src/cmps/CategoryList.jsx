import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// Images
import ProgrammingLogo from '../assets/svg/programmingLogo.svg?react'
import DesignLogo from '../assets/svg/designLogo.svg?react'
import DigitalLogo from '../assets/svg/digitalLogo.svg?react'
import WritingLogo from '../assets/svg/writingLogo.svg?react'
import VideoLogo from '../assets/svg/videoLogo.svg?react'
import AiLogo from '../assets/svg/aiLogo.svg?react'
import MusicLogo from '../assets/svg/musicLogo.svg?react'
import BusinessLogo from '../assets/svg/businessLogo.svg?react'
import ConsultingLogo from '../assets/svg/consultingLogo.svg?react'
import Chevron from '../assets/svg/chevronIcon.svg?react'

export function CategoryList() {
	const [searchParams, setSearchParams] = useSearchParams()

	const categoriesList = [
		{
			categoryTxt: 'Programming & Tech',
			logo: <ProgrammingLogo />,
		},
		{
			categoryTxt: 'Graphics & Design',
			logo: <DesignLogo />,
		},
		{
			categoryTxt: 'Digital Marketing',
			logo: <DigitalLogo />,
		},
		{
			categoryTxt: 'Writing & Translation',
			logo: <WritingLogo />,
		},
		{
			categoryTxt: 'Video & Animation',
			logo: <VideoLogo />,
		},
		{
			categoryTxt: 'AI Services',
			logo: <AiLogo />,
		},
		{
			categoryTxt: 'Music & Audio',
			logo: <MusicLogo />,
		},
		{
			categoryTxt: 'Business',
			logo: <BusinessLogo />,
		},
		{
			categoryTxt: 'Consulting',
			logo: <ConsultingLogo />,
		},
	]

	const [itemsShown, setItemsShown] = useState(0)
	const [itemsPerPage, setItemsPerPage] = useState(0)

	useEffect(() => {
		const calculateItemsPerPage = () => {
			const itemWidth = 150 // Width of each item
			const itemsPerRow = Math.floor(window.innerWidth / itemWidth)
			setItemsPerPage(itemsPerRow)
			setItemsShown(itemsPerRow * 2) // Show items that fit in two rows
		}

		calculateItemsPerPage()
		window.addEventListener('resize', calculateItemsPerPage)

		return () => {
			window.removeEventListener('resize', calculateItemsPerPage)
		}
	}, [])

	const handleViewMore = () => {
		setItemsShown(prevItemsShown => prevItemsShown + itemsPerPage * 2)
	}

	const handleViewLess = () => {
		setItemsShown(itemsPerPage * 2) // Reduce to the original two rows
	}

	function onCategory(categoryToSave) {
		return `?category=${categoryToSave.categoryTxt.split(' ')[0].toLowerCase()}`
	}

	const hasMoreThanTwoRows = categoriesList.length > itemsPerPage * 2

	return (
		<section className='category-list-container'>
			<div className='category-list'>
				{categoriesList.slice(0, itemsShown).map(category => (
					<Link className='category-list-link' to={`gigs${onCategory(category)}`} key={category.categoryTxt}>
						<div className='category-list-logo'>{category.logo}</div>
						<p className='category-list-text'>{category.categoryTxt}</p>
					</Link>
				))}
			</div>
			{hasMoreThanTwoRows && itemsShown < categoriesList.length && (
				<div className='view-more-button' onClick={handleViewMore}>
					<p>View more</p>
					<div className='chevron'>
						<Chevron />
					</div>
				</div>
			)}
			{hasMoreThanTwoRows && itemsShown > itemsPerPage * 2 && (
				<div className='view-more-button' onClick={handleViewLess}>
					<p>View less</p>
					<div className='chevron'>
						<Chevron className='inverted-chevron' />
					</div>
				</div>
			)}
		</section>
	)
}
