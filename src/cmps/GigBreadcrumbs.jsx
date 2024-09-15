// React
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { breadCrumbsTxt } from '../services/util.service'
// Images
import HomeIcon from '../assets/svg/HomeIcon.svg?react'

export function GigBreadcrumbs() {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const category = queryParams.get('category')

	const categoryMapping = breadCrumbsTxt()
	const displayCategory = categoryMapping[category]

	return (
		<div className='breadcrumbs-container'>
			<div className='home-icon'>
				<a href='/'>
					<HomeIcon />
				</a>
			</div>
			<span>/</span>
			<div className='breadcrumbs-content'>
				<p className='category-name'>{displayCategory.name}</p>
			</div>
		</div>
	)
}
