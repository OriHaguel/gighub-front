import React, { useEffect, useRef, useState } from 'react'


import { useSelector } from 'react-redux'
import { LoginSignup } from './LoginSignup'

// Image imports
import ModalLoginSignupPic from '../assets/img/modal-login-signup.png'
import TickIcon from '../assets/svg/TickIcon.svg?react'
import ArrowIcon from '../assets/svg/ArrowIcon.svg?react'
import LongArrowIcon from '../assets/svg/LongArrowIcon.svg?react'

export function NaviconHeader({ onClose, isOpen, isSinged, setIsSinged }) {
    const modalRef = useRef(null)
    const [selectDropOpen, setSelectDropOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen, onClose])

    const toggleDropdown = () => {
        console.log("Toggling dropdown")
        setSelectDropOpen(!selectDropOpen)
    }

    return (
        <div className={`navicon-container ${isOpen ? 'open' : ''}`}>
            <div className='modal-navicon' ref={modalRef}>
                <div className='navicon-modal-content'>
                    <button className='navicon-button-first'>Join gighub</button>
                    <button className='navicon-button-second'>Sign In</button>
                    <article className='sidebar collapsible'>
                        <div className='collapsible-header' onClick={toggleDropdown}>
                            <div className='collapsible-title'>
                            <span>Browse Categories</span>
                            </div>
                            <div className='collapsible-toggle'>
                                <span className='toggle-icon'>
                                    <ArrowIcon />
                                </span>
                            </div>
                        </div>

                        {selectDropOpen && (
                            <div className='collapsible-content'>
                                <ul className='category-list'>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Graphics & Design</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Programming & Tech</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Digital Marketing</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Video & Animation</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Writing & Translation</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Music & Audio</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Business</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>Consulting</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                    <li className='category-item'>
                                        <div className='category-menu-item'>
                                            <div className='category-label'>
                                                <span>AI Services</span>
                                            </div>
                                            <span className='arrow-icon'>
                                                <LongArrowIcon />
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </div>
    )
}