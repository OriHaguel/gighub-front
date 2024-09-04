// React
import { useState, useEffect } from 'react'

// Images
import HomeIcon from '../assets/svg/HomeIcon.svg?react'

export function GigBreadcrumbs() {
	return (
		<div className='breadcrumbs-container'>
			<HomeIcon />
			<p>
				<span>/</span>bread
			</p>
		</div>
	)
}
