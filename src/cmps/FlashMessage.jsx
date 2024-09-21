import { useState, useEffect } from 'react'

const FlashMessage = ({ msg, duration = 3000 }) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (msg) {
			setIsVisible(true)
			const timer = setTimeout(() => {
				setIsVisible(false)
			}, duration)

			return () => clearTimeout(timer) // Cleanup the timer when component unmounts or msg changes
		}
	}, [msg, duration])

	return <div className={`user-msg ${isVisible ? 'open' : ''}`}>{msg}</div>
}

export default FlashMessage
