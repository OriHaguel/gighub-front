// React
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Images
import HomeIcon from '../assets/svg/HomeIcon.svg?react'

export function GigBreadcrumbs() {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)

	return (
		<div className='breadcrumbs-container'>
			<div className='home-icon'>
				<a href='/'>
					<HomeIcon />
				</a>
			</div>
			<span>/</span>
			<p>{queryParams.get('category') || ''}</p>
		</div>
	)
}
