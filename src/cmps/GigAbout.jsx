import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gigService } from '../services/gig/gig.service.local.js'

export function GigAbout() {
	return (
		<section className='about-details'>
			<h1 className='about-gig'>About this gig</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit id ex posuere placerat. Nullam tristique, velit non consectetur sagittis, enim felis bibendum neque, at euismod est velit vel neque. Nullam convallis, ex et interdum facilisis, metus nunc ullamcorper tellus, vel semper odio neque vel velit. Sed non enim sed metus ultricies tincidunt. Nulla facilisi. Donec semper velit sed est efficitur, non consectetur nunc varius. Nullam malesuada, ipsum eu consectetur pulvinar, velit neque consectetur lectus, vel eleifend velit felis eu felis. Maecenas non ipsum vel mi consectetur condimentum. Sed auctor, metus non ultricies tristique, sapien ipsum pharetra sapien, ut rutrum neque nisi sed mi. Donec non purus vel ipsum consectetur scelerisque. Donec volutpat, arcu sed facilisis al</p>
		</section>
	)
}
