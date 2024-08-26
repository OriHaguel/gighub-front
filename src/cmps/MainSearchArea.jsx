
import hero from '../assets/img/hero-section.jpeg'
import SearchLogo from '../assets/svg/searchLogo.svg?react'
import { SearchInput } from './SearchInput'
import MetaLogo from '../assets/svg/MetaLogo.svg?react'
import GoogleLogo from '../assets/svg/GoogleLogo.svg?react'
import NetflixLogo from '../assets/svg/NetflixLogo.svg?react'
import PAndGLogo from '../assets/svg/pAndGLogo.svg?react'
import PayPalLogo from '../assets/svg/PayPalLogo.svg?react'
import PayoneerLogo from '../assets/svg/PayoneerLogo.svg?react'

export function MainSearchArea() {

    return (
        <div className="hero-container">
            <img src={hero} alt="Green-Hero" className="hero-image" />
            <div className="hero-content">
                <div className='promotion-txt'>
                    <h1 className='txt-content'>Scale your professional workforce with <i className='freelancers-txt'>freelancers</i></h1>
                </div>
                {/* <div className="search-bar-package">
                    <form className="search-form">
                        <input type="search" className="search-input" placeholder="Search for any service..." />
                        <button className="search-button">
                            <SearchLogo />
                        </button>
                    </form>
                </div> */}
                <SearchInput />
                <div className="logo-section">
                    <ul className="logo-list">
                        <div>Trusted By:</div>
                        <li><MetaLogo /></li>
                        <li><GoogleLogo /></li>
                        <li><NetflixLogo /></li>
                        <li><PAndGLogo /></li>
                        <li><PayPalLogo /></li>
                        <li><PayoneerLogo /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

