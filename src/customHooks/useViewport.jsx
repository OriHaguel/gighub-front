import { useState, useEffect } from 'react'

export function useViewport() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600)
		}

		window.addEventListener('resize', handleResize)

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return isMobile
}
