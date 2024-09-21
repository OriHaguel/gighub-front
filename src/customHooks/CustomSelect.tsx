import React from 'react'
import { useState, useEffect, useRef } from 'react'

import Chevron from '../assets/svg/chevronIcon.svg?react'
import CheckIcon from '../assets/svg/CheckIcon.svg?react'

// Hello, this file is Typescript for some reason. The error above appears errorrish, but apparently everything works fine.
// For the record the console is error free as well.

interface CustomSelectProps {
	placeholder: string
	options: string[] // Assuming options are strings
	handleSelected: (option: string) => void
	selected: string
}

export const CustomSelect = ({ placeholder, options, handleSelected, selected }: CustomSelectProps) => {
	const selectRef = useRef<HTMLDivElement | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	const handleClickOutside = (e: MouseEvent) => {
		if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
			setIsOpen(false)
		}
	}

	const handleSelectToggle = () => {
		setIsOpen((prev) => !prev)
	}

	useEffect(() => {
		window.addEventListener('click', handleClickOutside)
		return () => {
			window.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<section ref={selectRef} className={`custom-select ${isOpen ? 'open' : ''}`}>
			<div className='text-container flex align-center space-between' onClick={handleSelectToggle}>
				<span> Sort by: </span>
				<p>
					{selected ? selected : placeholder}
					<span>
						<Chevron />
					</span>
				</p>
			</div>
			{isOpen && (
				<ul className='options-container flex column space-between'>
					{options.map((option, idx) => (
						<li
							key={option}
							className={`option option-${idx}`}
							onClick={() => {
								handleSelected(option)
								setIsOpen(false)
							}}>
							{selected === option && (
								<CheckIcon className={`check-icon option-${idx}`} />
							)}
							{option}

						</li>
					))}
				</ul>
			)}
		</section>
	)
}

// <span className="check-icon">
// 	<CheckIcon />
// </span>