import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProgrammingLogo from '../assets/svg/programmingLogo.svg?react'
import DesignLogo from '../assets/svg/designLogo.svg?react'
import DigitalLogo from '../assets/svg/digitalLogo.svg?react'
import WritingLogo from '../assets/svg/writingLogo.svg?react'
import VideoLogo from '../assets/svg/videoLogo.svg?react'
import AiLogo from '../assets/svg/aiLogo.svg?react'
import MusicLogo from '../assets/svg/musicLogo.svg?react'
import BusinessLogo from '../assets/svg/businessLogo.svg?react'
import ConsultingLogo from '../assets/svg/consultingLogo.svg?react'
export function CategoryList() {
	const what = [
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

	const [categories, setCategories] = useState(what)

	return (
		<section className='category-list-container'>
			{categories &&
				categories.map(category => (
					<div className='category-list' key={category.categoryTxt}>
						<Link className='category-list-link' to={`category/${category.categoryTxt.split(' ')[0].toLowerCase()}`}>
							<div className='category-list-logo'>{category.logo}</div>
							<p className='category-list-text'>{category.categoryTxt}</p>
						</Link>
					</div>
				))}
		</section>
	)
}
