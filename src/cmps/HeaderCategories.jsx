// React
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// TODO: refresh filter

export function HeaderCategories() {
	const [searchParams, setSearchParams] = useSearchParams()

	const categoriesList = [{ categoryTxt: 'Graphics & Design' }, { categoryTxt: 'Programming & Tech' }, { categoryTxt: 'Digital Marketing' }, { categoryTxt: 'Video & Animation' }, { categoryTxt: 'Writing & Translation' }, { categoryTxt: 'Music & Audio' }, { categoryTxt: 'Business' }, { categoryTxt: 'Consulting' }, { categoryTxt: 'Consulting' }, { categoryTxt: 'AI Services' }, { categoryTxt: 'Personal Growth' }]

	const onCategory = categoryToSave => {
		return `?category=${categoryToSave.categoryTxt.split(' ')[0].toLowerCase()}`
	}

	return (
		<div className='header-category-wrapper'>
			<section className='main-container'>
				<div className='header-category-list'>
					{categoriesList.map(category => (
						<div className='category-list' key={category.categoryTxt}>
							<Link className='category-list-link' to={`gigs${onCategory(category)}`}>
								<p className='category-list-text'>{category.categoryTxt}</p>
							</Link>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
