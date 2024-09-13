import React from 'react'
import { useState } from 'react'
import video from '../assets/vid/How Fiverr Works EN Subs 16x9.mp4'
import CheckIcon from '..//assets/svg/CheckIcon.svg?react'
import { Modal } from './Modal.jsx'

export function AdvertArea() {
    const [isSinged, setIsSinged] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = isSignedUp => {
        setIsModalOpen(true)
        setIsSinged(isSignedUp)
    }

    return (
        <div className='advert-container'>
            <div className='text-content'>
                <div className='fingertips-container' data-test-id='fingertips-container' data-impression-item='1e64c694-ff65-4bb7-be1d-724cc537fd36' impressed-item='true'>
                    <h2 className='fingertips-title'>Make it all happen with freelancers</h2>
                    <ul className='fingertips-list'>
                        <li className='fingertips-item'>
                            <img className='fingertips-icon' alt='Access a pool of top talent across 9 categories' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.8badf97.svg' />
                            <p>Access a pool of top talent across 9 categories</p>
                        </li>
                        <li className='fingertips-item'>
                            <img className='fingertips-icon' alt='Enjoy a simple, easy-to-use matching experience' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/matching.0eef7cc.svg' />
                            <p>Enjoy a simple, easy-to-use matching experience</p>
                        </li>
                        <li className='fingertips-item'>
                            <img className='fingertips-icon' alt='Get quality work done quickly and within budget' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/quickly.6879514.svg' />
                            <p>Get quality work done quickly and within budget</p>
                        </li>
                        <li className='fingertips-item'>
                            <img className='fingertips-icon' alt='Only pay when you’re happy' src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/happy.42ed7bd.svg' />
                            <p>Only pay when you’re happy</p>
                        </li>
                    </ul>
                    {/* <div className='fingertips-cta'>
						<a className='btn-signup' onClick={() => openModal(true)}>
							Join now
						</a>
					</div> */}
                </div>
                <ul className='benefits-list'>
                    {/* <li>A whole world of freelance talent at your fingertips, explore our talents</li>
                    <li>Get results from skilled freelancers from all over the world, for every task, at any price point</li>
                    <li>Pay per project or by the hour. Payments only get released when you approve</li>
                    <li>Filter to find the right freelancers quickly and get great work delivered in no time, every time</li> */}
                    {/* <li>Chat with our team to get your questions answered or resolve any issues with your orders</li> */}
                    <li>
                        <p>Discover a world of top freelance talent, explore diverse skills at your fingertips</p>
                    </li>
                    <li>
                        <p>Get results from experienced freelancers worldwide for any task, at any price</p>
                    </li>
                    <li>
                        <p>Pay per project or by the hour. Funds are released only when you approve the work</p>
                    </li>
                    <li>
                        <p>Quickly filter to find the perfect freelancers and get high-quality work on time</p>
                    </li>
                </ul>
            </div>
            <div className='advert-area'>
                <video style={{
                    width: '100%',
                    maxWidth: '1048px',
                    height: '590px',
                    borderRadius: '15px'
                }} className='advert-video' controls autoPlay loop muted src={video} title='Advert Video'></video>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isSinged={isSinged} setIsSinged={setIsSinged} />
        </div>
    )
}
