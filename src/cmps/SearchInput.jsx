import { useSelector } from 'react-redux'
import SearchLogo from '../assets/svg/searchLogo.svg?react'
import { setFilterBy } from '../store/actions/gig.actions'
import { Link } from 'react-router-dom'

export function SearchInput() {
    // const filterBy = useSelector(state => state.gigModule.filterBy)
    // console.log("🚀 ~ GigPage ~ filterBy:", filterBy)


    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value = ev.target.value

        switch (type) {
            case 'text':
            case 'radio':
                value = field === 'sortDir' ? +ev.target.value : ev.target.value
                if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterBy({ txt: value })
    }


    return (
        <div className="search-bar-package" >
            <form className="search-form" onChange={handleChange}>
                <input type="search" className="search-input" placeholder="Search for any service..." />
                <Link to={'gigs'}>
                    <button className="search-button">
                        <SearchLogo />
                    </button>
                </Link>
            </form>
        </div>
    )
}