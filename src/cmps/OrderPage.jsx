import { useEffect, useState, useRef } from "react"
import InfoIcon from '../assets/svg/InfoIcon.svg?react'
import CloseIcon from '../assets/svg/CloseIcon.svg?react'
import OptionsIcon from '../assets/svg/OptionsIcon.svg?react'
import PackageIcon from '../assets/svg/PackageIcon.svg?react'
import ArrowIcon from '../assets/svg/ArrowIcon.svg?react'
import TimerLogo from '../assets/svg/TimerLogo.svg?react'
import RecycleLogo from '../assets/svg/RecycleLogo.svg?react'
import { gigService } from "../services/gig"


export function OrderPage({ selectedPackage, gig, onClose }) {

    // console.log('testing yesh ',gig)

    const [upgrades, setUpgrades] = useState({
        'Include Source File': false,
        'Personal Consultation': false,
        'Social Media Promotion': false
    })

    const upgradeDetails = {
        'Include Source File': {
            description: 'Receive the source file in addition to your final work.',
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
    // gig.price = selectedPackage
    
    const totalPrice = gig.price + totalUpgradesPrice

    return (

        <div className="order-modal-overlay">
            <div className="order-modal-content">
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
                                                <span className="package-name">Basic package</span>
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
                                <span className="timer-logo" aria-hidden="true" >
                                    <TimerLogo />
                                </span>
                                <span className="detail-info">3-day delivery</span>
                            </li>
                            <li className="summery-icons">
                                <span className="recycle-logo" aria-hidden="true" >
                                    <RecycleLogo />
                                </span>
                                <span className="detail-info">No revisions</span>
                            </li>
                        </ul>
                        <div className='finish-order-section'>
                            <button className="place-order-button">
                                Continue (${totalPrice})
                            </button>
                            <div className='charged-msg'>You won’t be charged yet</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
