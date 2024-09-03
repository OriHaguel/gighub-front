import { useEffect, useState } from 'react'
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react'

export function SortGigs({ toggleDropdown, activeDropdown, filterBy, setFilterBy }) {
    // console.log("🚀 ~ SortGigs ~ filterBy:", filterBy)

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })



    useEffect(() => {
        if (filterByToEdit.price === '' && filterByToEdit.daysToMake === '') {

            setFilterBy(filterByToEdit)
        }
    }, [filterByToEdit])


    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value = ev.target.value

        switch (type) {
            case 'text':

            case 'number':
                value = +ev.target.value || ''
                break
        }
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmit() {
        setFilterBy(filterByToEdit)
    }


    function onClear() {
        setFilterByToEdit(prevFilter => ({ ...prevFilter, price: '', daysToMake: '' }))
    }

    return (

        /* <div className="filter">
            <button className="filter-button" onClick={() => toggleDropdown('serviceOptions')}>
            <p className="filter-label">Service options</p>
            <span className="chevron-icon-down" aria-hidden="true">
            <ChevronIcon />
            </span>
        </button>
        {activeDropdown === 'serviceOptions' && (
            <div className="dropdown-content">
                <ul>
                <li><button>Option 1</button></li>
                <li><button>Option 2</button></li>
                <li><button>Option 3</button></li>
                </ul>
                </div>
                )}
                </div> */

        /* <div className="filter">
        <button className="filter-button" onClick={() => toggleDropdown('sellerDetails')}>
        <p className="filter-label">Seller details</p>
            <span className="chevron-icon-down" aria-hidden="true">
            <ChevronIcon />
            </span>
            </button>
            {activeDropdown === 'sellerDetails' && (
                <div className="dropdown-content">
                <ul>
                    <li><button>Top Rated</button></li>
                    <li><button>Level One</button></li>
                    <li><button>Level Two</button></li>
                    </ul>
                    </div>
                    )}
    </div> */

        <section className="gig-sorting">
            <div className="top-filters">
                <div className="filter-budget">
                    <button className="filter-button" onClick={() => toggleDropdown('budget')}>
                        <p className="filter-label">Budget</p>
                        {/* <span className="chevron-icon-down" aria-hidden="true"> */}
                        <ChevronIcon className="chevron-icon-down" />
                        {/* </span> */}
                    </button>
                    {activeDropdown === 'budget' && (
                        <div className="dropdown-content">
                            <ul>
                                <li><input className='radio-dot' type="radio" value={`low`} name='price' onChange={handleChange} />under 100</li>
                                <li><input className='radio-dot' type="radio" value={`mid`} name='price' onChange={handleChange} />$100 - $500</li>
                                <li><input className='radio-dot' type="radio" value={`high`} name='price' onChange={handleChange} />$500 & above</li>
                            </ul>
                            <div className='sort-buttons-section'>
                                <button className='clear-button' onClick={onClear}>Clear All</button>
                                <button className='apply-button' onClick={onSubmit}>Apply</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="filter-time">
                    <button className="filter-button" onClick={() => toggleDropdown('deliveryTime')}>
                        <p className="filter-label">Delivery time</p>
                        {/* <span className="chevron-icon-down" aria-hidden="true"> */}
                        <ChevronIcon className="chevron-icon-down" />
                        {/* </span> */}
                    </button>
                    {activeDropdown === 'deliveryTime' && (
                        <div className="dropdown-content">
                            <ul>
                                <li><input className='radio-dot' type="radio" value={`day`} name='daysToMake' onChange={handleChange} />Express 24H</li>
                                <li><input className='radio-dot' type="radio" value={`3days`} name='daysToMake' onChange={handleChange} />up to 3 days</li>
                                <li><input className='radio-dot' type="radio" value={`7days`} name='daysToMake' onChange={handleChange} />up to 7 days</li>
                                <li><input className='radio-dot' type="radio" value={`anytime`} name='daysToMake' onChange={handleChange} />Anytime</li>
                            </ul>
                            <div className='sort-buttons-section'>
                                <button className='clear-button' onClick={onClear}>Clear All</button>
                                <button className='apply-button' onClick={onSubmit}>Apply</button>
                                {/* <button className='apply-button' onClick={onSubmit}>Apply</button> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}