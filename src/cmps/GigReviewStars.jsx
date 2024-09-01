import React from 'react'
import star from '../assets/svg/star.svg?react'

export function StarRating({ rating }) {
	// Create an array to represent the stars
	const stars = Array.from({ length: 5 }, (_, index) => {
		// If the index is less than the rating, return a filled star, otherwise an empty star
		return index < rating ? <star /> : '☆'
	})

	return (
		<div className='star-rating'>
			{stars.map((star, index) => (
				<span key={index} className='star'>
					{star}
				</span>
			))}
		</div>
	)
}

export default StarRating
