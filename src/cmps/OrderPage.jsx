import InfoIcon from '../assets/svg/InfoIcon.svg?react'
import CloseIcon from '../assets/svg/CloseIcon.svg?react'
import OptionsIcon from '../assets/svg/OptionsIcon.svg?react'
import PackageIcon from '../assets/svg/PackageIcon.svg?react'
import ArrowIcon from '../assets/svg/ArrowIcon.svg?react'
import TimerLogo from '../assets/svg/TimerLogo.svg?react'
import RecycleLogo from '../assets/svg/RecycleLogo.svg?react'
export function OrderPage({ gig, onClose }) {

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
                            <div className="option-item">
                                <div className="option-info">
                                    <h4 className="option-title">Include Source File</h4>
                                    <p className="option-description">Receive the source file in addition to your final work.</p>
                                </div>
                                <div className="option-action">
                                    <p className="option-price">$20</p>
                                    <button className="add-option-button">
                                        <OptionsIcon />
                                    </button>
                                </div>
                            </div>
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
                                <span className="summary-item-price">$20</span>
                            </li>
                        </ul>
                        <div className="total-price">
                            <span>Total</span>
                            <span className="total-amount">${gig.price + 20}</span>
                        </div>
                        <ul className="bonus-info-order-page">
                            <li>
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
                                    {/* <div >
                                        <ul className="details-list">
                                            <li className="detail-item-items-center">
                                                <span>Speed optimization</span>
                                            </li>
                                            <li className="detail-item-items-center-text-normal">
                                                <span>Browser Caching</span>
                                            </li>
                                        </ul>
                                    </div> */}
                                </article>
                            </li>
                            <li className="flex-items-center-icon-list-item">
                                <span className="timer-logo" aria-hidden="true" >
                                    <TimerLogo />
                                </span>
                                <span className="detail-info">3-day delivery</span>
                            </li>
                            <li className="flex-items-center-icon-list-item">
                                <span className="recycle-logo" aria-hidden="true" >
                                    <RecycleLogo />
                                </span>
                                <span className="detail-info">No revisions</span>
                            </li>
                        </ul>
                        <button className="place-order-button">Continue (${gig.price + 20})</button>
                        <div className='charged-msg'>You won’t be charged yet</div>
                    </div>
                </div>
            </div>
        </div>
    )

}