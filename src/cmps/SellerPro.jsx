import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SellerProImg from '../assets/svg/SellerProImg.svg?react'

export function SellerPro() {
	return (
		<div className='seller-pro-container'>
			<SellerProImg />
			<p className='pro-text'>Pro</p>
		</div>
	)
}
