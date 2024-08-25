import React from 'react'
import video from '../assets/vid/How Fiverr Works EN Subs 16x9.mp4'

export function AdvertArea() {

    return (
        <div className="advert-container">
            <div className="text-content">
                <p>A whole world of freelance talent at your fingertips,</p>
                <p>Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
                <p>Pay per project or by the hour (Pro). Payments only get released when you approve.</p>
                <p>Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
                <p>Chat with our team to get your questions answered or resolve any issues with your orders.</p>
            </div>
            <div className="advert-area">
                <video
                    style={{ width: '100%', maxWidth: '1048px', height: '590px' }}
                    className="advert-video"
                    controls
                    src={video}
                    title="Advert Video"
                ></video>
            </div>
        </div>
    )
}
