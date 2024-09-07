import { useEffect, useState, useRef } from "react"
import { useSelector } from "react-redux"
import InfoIcon from '../assets/svg/InfoIcon.svg?react'
import CloseIcon from '../assets/svg/CloseIcon.svg?react'
import OptionsIcon from '../assets/svg/OptionsIcon.svg?react'
import PackageIcon from '../assets/svg/PackageIcon.svg?react'
import ArrowIcon from '../assets/svg/ArrowIcon.svg?react'
import TimerLogo from '../assets/svg/TimerLogo.svg?react'
import RecycleLogo from '../assets/svg/RecycleLogo.svg?react'
// import { gigService } from "../services/gig"
import { addOrder } from "../store/actions/order.actions"
import Swal from 'sweetalert2'


export function OrderPage({ gig, selectedPackage, onClose }) {
    const gigOrder = useSelector(state => state.gigOrder.addOrder)
    const modalRef = useRef(null)
    const [upgrades, setUpgrades] = useState({
        'Proof of Concept': false,
        'Personal Consultation': false,
        'Social Media Promotion': false
    })

    // console.log('order page gig debug ', gig)
    // console.log('order page package debug', selectedPackage)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [onClose])


    const upgradeDetails = {
        'Proof of Concept': {
            description: 'Receive a bonus proof of concept for the project, showcasing the key elements before final delivery.',
            price: 20
        },
        'Personal Consultation': {
            description: 'A 30-minute one-on-one consultation to discuss your project and provide personalized guidance.',
            price: 40
        },
        'Social Media Promotion': {
            description: 'Promote your project on my social media channels to reach a wider audience.',
            price: 60
        }
    }

    const handleUpgradeToggle = (title) => {
        setUpgrades(prevUpgrades => ({
            ...prevUpgrades,
            [title]: !prevUpgrades[title]
        }))
    }

    let totalUpgradesPrice = 0
    const upgradeTitles = Object.keys(upgrades)
    for (let i = 0; i < upgradeTitles.length; i++) {
        const title = upgradeTitles[i]
        if (upgrades[title]) {
            totalUpgradesPrice += upgradeDetails[title].price
        }
    }
    const totalPrice = selectedPackage.price + totalUpgradesPrice
    const daysToMake = selectedPackage.daysToMake
    const handleConfirmOrder = async () => {
        try {
            const finalOrder = {
                // gig,
                // selectedPackage,
                // upgrades,
                daysToMake,
                totalPrice,
                miniGig: {
                    _id: gig._id,
                    title: gig.title,
                    img: gig.img,
                    price: totalPrice,
                },
                seller: gig.owner
            }
            console.log("🚀 ~ handleConfirmOrder ~ finalOrder:", finalOrder)
            const savedOrder = await addOrder(finalOrder)
            console.log('Order confirmed:', savedOrder)
            Swal.fire({
                title: 'Order Confirmed!',
                text: `Your order has been placed successfully. You will be charged $${totalPrice}`,
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } catch (err) {
            console.error('Error confirming order:', err)
            Swal.fire({
                title: 'Order Failed',
                text: 'There was an error confirming your order. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

    return (
        <div className="order-modal-overlay">
            <div className="order-modal-content" ref={modalRef}>
                <button className="close-modal-button" onClick={onClose}>
                    <CloseIcon />
                </button>
                <div className="order-modal-header">
                    <h2 className="order-modal-title">Order options</h2>
                </div>
                <div className="order-modal-body">
                    <div className="order-option">
                        <div className="option-header">
                            <span>Available Upgrades</span>
                            <button className="info-button">
                                <InfoIcon />
                            </button>
                        </div>
                        <div className="option-list">
                            {Object.keys(upgradeDetails).map(title => (
                                <div
                                    className={`option-item ${upgrades[title] ? 'selected' : ''}`}
                                    key={title}
                                    onClick={() => handleUpgradeToggle(title)}
                                >
                                    <div className="option-info">
                                        <h4 className="option-title">{title}</h4>
                                        <p className="option-description">
                                            {upgradeDetails[title].description}
                                        </p>
                                    </div>
                                    <div className="option-action">
                                        <p className="option-price">${upgradeDetails[title].price}</p>
                                        <button
                                            className="add-option-button"
                                        >
                                            <OptionsIcon />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-summary">
                        <h3 className="summary-title">Order Summary</h3>
                        <ul className="summary-list">
                            <li className="summary-item">
                                <span className="summary-item-name">Base Price</span>
                                <span className="summary-item-price">${gig.price}</span>
                            </li>
                            <li className="summary-item">
                                <span className="summary-item-name">Total Upgrades</span>
                                <span className="summary-item-price">${totalUpgradesPrice}</span>
                            </li>
                        </ul>
                        <div className="total-price">
                            <span>Total</span>
                            <span className="total-amount">${totalPrice}</span>
                        </div>
                        <ul className="bonus-info-order-page">
                            <li className="summery-icons">
                                <article className="package-item">
                                    <div className="package-header">
                                        <div className="icon-container">
                                            <li className="icon-list-item">
                                                <span className="package-icon" aria-hidden="true">
                                                    <PackageIcon />
                                                </span>
                                                <span className="package-name">{selectedPackage.type}</span>
                                            </li>
                                        </div>
                                        <div className="arrow-container">
                                            <span className="arrow-icon" aria-hidden="true">
                                                {/* <ArrowIcon /> */}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </li>
                            <li className="summery-icons">
                                <span className="timer-logo" aria-hidden="true">
                                    <TimerLogo />
                                </span>
                                <span className="detail-info">{selectedPackage.daysToMake}-day delivery</span>
                            </li>
                            <li className="summery-icons">
                                <span className="recycle-logo" aria-hidden="true">
                                    <RecycleLogo />
                                </span>
                                <span className="detail-info">{selectedPackage.revisions} revisions</span>
                            </li>
                        </ul>
                        <div className='finish-order-section'>
                            <button className="place-order-button" onClick={handleConfirmOrder}>
                                Confirm & Pay (${totalPrice})
                            </button>
                            <div className='charged-msg'>You Will Be Charged Immediately</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}