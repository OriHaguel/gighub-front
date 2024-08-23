
import hero from '../assets/img/hero-section.jpeg'
import  SearchLogo  from '../assets/svg/searchLogo.svg?react'

export function MainSearchArea() {

    return (
        <div className="hero-container">
            <img src={hero} alt="Green-Hero" className="hero-image" />
            <div className="hero-content">
                <div className='promotion-txt'>
                    <h1>Scale your professional</h1>
                    <h1>workforce with freelancers</h1>
                </div>
                <div className="search-bar-package">
                    <form className="search-form">
                        <input type="search" className="search-input" placeholder="Search for any service..." />
                        <button className="search-button">
                            <SearchLogo />
                        </button>
                    </form>
                </div>
                <div className="logo-section">
                    <ul className="logo-list">
                        <div>Trusted By:</div>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.ff37dd3.svg" alt="meta" width="70" height="14" /></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.e74f4d9.svg" alt="Google" width="53.41" height="17.87" /></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.b310314.svg" alt="NETFLIX" width="53.64" height="14.37" /></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pg.22fca85.svg" alt="P&amp;G" width="33.13" height="13.8" /></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.d398de5.svg" alt="PayPal" width="53.01" height="12.69" /></li>
                        <li><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/payoneer.7c1170d.svg" alt="Payoneer" width="82.42" height="16" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

