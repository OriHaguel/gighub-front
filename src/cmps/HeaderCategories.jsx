// React
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { setFilterBy } from "../store/actions/gig.actions";
import { useSelector } from 'react-redux';
export function HeaderCategories() {
	const filterBy = useSelector(state => state.gigModule.filterBy)
	const [searchParams, setSearchParams] = useSearchParams()

	const categoriesList = [{ categoryTxt: 'Graphics & Design' }, { categoryTxt: 'Programming & Tech' }, { categoryTxt: 'Digital Marketing' }, { categoryTxt: 'Video & Animation' }, { categoryTxt: 'Writing & Translation' }, { categoryTxt: 'Music & Audio' }, { categoryTxt: 'Business' }, { categoryTxt: 'Consulting' }, { categoryTxt: 'AI Services' }]

	function onCategory(categoryToSave) {

		// setFilterBy({ category: categoryToSave.categoryTxt.split(' ')[0].toLowerCase() })
		// setSearchParams({ category: categoryToSave.categoryTxt.split(' ')[0].toLowerCase() })
		return `?category=${categoryToSave.categoryTxt.split(' ')[0].toLowerCase()}`
	}



	return (
		<div className='header-category-wrapper'>
			<section className='main-container'>
				<div className='header-category-list'>
					{categoriesList.map(category => (
						<div className='category-list' key={category.categoryTxt}>
							<Link className='category-list-link' to={`gigs${onCategory(category)}`} onClick={() => setFilterBy({ category: category.categoryTxt.split(' ')[0].toLowerCase() })}>
								<p className='category-list-text'>{category.categoryTxt}</p>
							</Link>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}


// const handleClick = (e, category) => {
// 	e.preventDefault()

// 	const currentCategory = searchParams.get('category')
// 	const newCategory = category.categoryTxt.split(' ')[0].toLowerCase()

// 	if (currentCategory === newCategory) {
// 		// If the current category is the same as the new one, refresh the page
// 		window.location.reload()
// 	} else {
// 		// Otherwise, navigate to the new category
// 		setSearchParams({ category: newCategory })
// 	}
// }