import InfoIcon from '../assets/svg/InfoIcon.svg?react'
import CloseIcon from '../assets/svg/CloseIcon.svg?react'
import OptionsIcon from '../assets/svg/OptionsIcon.svg?react'
export function OrderPage({ gig, onClose }) {

    return (

        <div class="order-modal-overlay">
            <div class="order-modal-content">
                <button class="close-modal-button" onClick={onClose}>
                    <CloseIcon />
                </button>
                <div class="order-modal-header">
                    <h2 class="order-modal-title">Order options</h2>
                </div>
                <div class="order-modal-body">
                    <div class="order-option">
                        <div class="option-header">
                            <span>Available Upgrades</span>
                            <button class="info-button">
                                <InfoIcon />
                            </button>
                        </div>
                        <div class="option-list">
                            <div class="option-item">
                                <div class="option-info">
                                    <h4 class="option-title">Include Source File</h4>
                                    <p class="option-description">Receive the source file in addition to your final work.</p>
                                </div>
                                <div class="option-action">
                                    <p class="option-price">$20</p>
                                    <button class="add-option-button">
                                        <OptionsIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-summary">
                        <h3 class="summary-title">Order Summary</h3>
                        <ul class="summary-list">
                            <li class="summary-item">
                                <span class="summary-item-name">Base Price</span>
                                <span class="summary-item-price">${gig.price}</span>
                            </li>
                            <li class="summary-item">
                                <span class="summary-item-name">Total Upgrades</span>
                                <span class="summary-item-price">$20</span>
                            </li>
                        </ul>
                        <div class="total-price">
                            <span>Total</span>
                            <span class="total-amount">${gig.price + 20}</span>
                        </div>
                        <button class="place-order-button">Continue (${gig.price + 20})</button>
                        <div>You won’t be charged yet</div>
                    </div>
                </div>
            </div>
        </div>
    )

}