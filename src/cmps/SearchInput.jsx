import { useSelector } from 'react-redux'
import SearchLogo from '../assets/svg/searchLogo.svg?react'
import { setFilterBy } from '../store/actions/gig.actions'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
export function SearchInput() {
    const filterBy = useSelector(state => state.gigModule.filterBy)


    const navigate = useNavigate()
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
    function onSubmit(ev) {
        ev.preventDefault()
        // navigate(`gigs?${filterBy}`)
        navigate(`gigs?txt=${filterBy.txt}`)
    }

    return (
        <div className="search-bar-package" >
            <form className="search-form" onSubmit={onSubmit}>
                <input type="search" className="search-input" placeholder="Search for any service..." onChange={handleChange} />

                <button className="search-button" type='submit'>
                    <SearchLogo />
                </button>
            </form>
        </div>
    )
}