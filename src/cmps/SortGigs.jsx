


// export function SortGigs({ toggleDropdown, activeDropdown, filterBy, setFilterBy }) {


//     // const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
//     const [filterByToEdit, setFilterByToEdit] = useState({ price: '', daysToMake: '' })
//     const [isVisible, setIsVisible] = useState(true);
//     const elBudgetRef = useRef(null);
//     const elDeliveryTimeRef = useRef(null);

//     useEffect(() => {
//         if (filterByToEdit.price === '' && filterByToEdit.daysToMake === '') {

//             setFilterBy(filterByToEdit)
//         }
//     }, [filterByToEdit])


//     function handleChange(ev) {
//         const type = ev.target.type
//         const field = ev.target.name
//         let value = ev.target.value

//         switch (type) {
//             case 'text':

//             case 'number':
//                 value = +ev.target.value || ''
//                 break
//         }
//         setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
//     }

//     function onSubmit() {
//         setFilterBy(filterByToEdit)
//         console.log("🚀 ~ onSubmit ~ filterByToEdit:", filterByToEdit)
//     }


//     function onClear() {
//         setFilterByToEdit(prevFilter => ({ ...prevFilter, price: '', daysToMake: '' }))
//     }

//     const handleOutsideClick = () => {
//         setIsVisible(false); // Hide the component or perform any other action
//         toggleDropdown(null);
//     };
//     useOutsideClick(elBudgetRef, handleOutsideClick);
//     useOutsideClick(elDeliveryTimeRef, handleOutsideClick);
//     return (

//         /* <div className="filter">
//             <button className="filter-button" onClick={() => toggleDropdown('serviceOptions')}>
//             <p className="filter-label">Service options</p>
//             <span className="chevron-icon-down" aria-hidden="true">
//             <ChevronIcon />
//             </span>
//         </button>
//         {activeDropdown === 'serviceOptions' && (
//             <div className="dropdown-content">
//                 <ul>
//                 <li><button>Option 1</button></li>
//                 <li><button>Option 2</button></li>
//                 <li><button>Option 3</button></li>
//                 </ul>
//                 </div>
//                 )}
//                 </div> */

//         /* <div className="filter">
//         <button className="filter-button" onClick={() => toggleDropdown('sellerDetails')}>
//         <p className="filter-label">Seller details</p>
//             <span className="chevron-icon-down" aria-hidden="true">
//             <ChevronIcon />
//             </span>
//             </button>
//             {activeDropdown === 'sellerDetails' && (
//                 <div className="dropdown-content">
//                 <ul>
//                     <li><button>Top Rated</button></li>
//                     <li><button>Level One</button></li>
//                     <li><button>Level Two</button></li>
//                     </ul>
//                     </div>
//                     )}
//     </div> */

//         <section className="gig-sorting">
//             <div className="top-filters">
//                 <div className="filter-budget" >
//                     <button className="filter-button" onClick={() => toggleDropdown('budget')}>
//                         <p className="filter-label">Budget</p>
//                         {/* <span className="chevron-icon-down" aria-hidden="true"> */}
//                         <ChevronIcon className="chevron-icon-down" />
//                         {/* </span> */}
//                     </button>
//                     {activeDropdown === 'budget' && isVisible && (
//                         <div className="dropdown-content" ref={elBudgetRef}>
//                             <ul>
//                                 <li><input className='radio-dot' type="radio" value={`low`} name='price' onChange={handleChange} />under 100</li>
//                                 <li><input className='radio-dot' type="radio" value={`mid`} name='price' onChange={handleChange} />$100 - $500</li>
//                                 <li><input className='radio-dot' type="radio" value={`high`} name='price' onChange={handleChange} />$500 & above</li>
//                             </ul>
//                             <div className='sort-buttons-section'>
//                                 <button className='clear-button' onClick={onClear}>Clear All</button>
//                                 <button className='apply-button' onClick={onSubmit}>Apply</button>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="filter-time">
//                     <button className="filter-button" onClick={() => toggleDropdown('deliveryTime')}>
//                         <p className="filter-label">Delivery time</p>
//                         {/* <span className="chevron-icon-down" aria-hidden="true"> */}
//                         <ChevronIcon className="chevron-icon-down" />
//                         {/* </span> */}
//                     </button>
//                     {activeDropdown === 'deliveryTime' && isVisible && (
//                         <div className="dropdown-content" ref={elDeliveryTimeRef}>
//                             <ul>
//                                 <li><input className='radio-dot' type="radio" value={`day`} name='daysToMake' onChange={handleChange} />Express 24H</li>
//                                 <li><input className='radio-dot' type="radio" value={`3days`} name='daysToMake' onChange={handleChange} />up to 3 days</li>
//                                 <li><input className='radio-dot' type="radio" value={`7days`} name='daysToMake' onChange={handleChange} />up to 7 days</li>
//                                 <li><input className='radio-dot' type="radio" value={`anytime`} name='daysToMake' onChange={handleChange} />More then 7 days</li>
//                             </ul>
//                             <div className='sort-buttons-section'>
//                                 <button className='clear-button' onClick={onClear}>Clear All</button>
//                                 <button className='apply-button' onClick={onSubmit}>Apply</button>
//                                 {/* <button className='apply-button' onClick={onSubmit}>Apply</button> */}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }


import { useEffect, useRef, useState } from 'react';
import ChevronIcon from '../assets/svg/ChevronIcon.svg?react';
import useOutsideClick from '../customHooks/useOutsideClick';

export function SortGigs({ toggleDropdown, activeDropdown, filterBy, setFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ price: '', daysToMake: '' });
    const elBudgetRef = useRef(null);
    const elDeliveryTimeRef = useRef(null);

    useEffect(() => {
        if (filterByToEdit.price === '' && filterByToEdit.daysToMake === '') {
            setFilterBy(filterByToEdit);
        }
    }, [filterByToEdit]);

    function handleChange(ev) {
        const { type, name, value } = ev.target;
        let newValue = value;

        if (type === 'number') {
            newValue = +value || '';
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [name]: newValue }));
    }

    function onSubmit() {
        setFilterBy(filterByToEdit);
        toggleDropdown(null)
        console.log('🚀 ~ onSubmit ~ filterByToEdit:', filterByToEdit);
    }

    function onClear() {
        setFilterByToEdit({ price: '', daysToMake: '' });
    }

    // Handle outside click for both dropdowns
    const handleOutsideClick = () => {
        toggleDropdown(null); // Close the dropdown when clicking outside
    };

    // Use outside click hook for both dropdowns
    useOutsideClick(elBudgetRef, handleOutsideClick);
    useOutsideClick(elDeliveryTimeRef, handleOutsideClick);

    return (
        <section className="gig-sorting">
            <div className="top-filters">
                {/* Budget Filter */}
                <div className="filter-budget">
                    <button className="filter-button" onClick={() => toggleDropdown('budget')}>
                        <p className="filter-label">Budget</p>
                        <ChevronIcon className="chevron-icon-down" />
                    </button>
                    {activeDropdown === 'budget' && (
                        <div className="dropdown-content" ref={elBudgetRef}>
                            <ul>
                                <li>
                                    <input
                                        className="radio-dot"
                                        type="radio"
                                        value="low"
                                        name="price"
                                        onChange={handleChange}
                                    />
                                    under 100
                                </li>
                                <li>
                                    <input
                                        className="radio-dot"
                                        type="radio"
                                        value="mid"
                                        name="price"
                                        onChange={handleChange}
                                    />
                                    $100 - $500
                                </li>
                                <li>
                                    <input
                                        className="radio-dot"
                                        type="radio"
                                        value="high"
                                        name="price"
                                        onChange={handleChange}
                                    />
                                    $500 & above
                                </li>
                            </ul>
                            <div className="sort-buttons-section">
                                <button className="clear-button" onClick={onClear}>
                                    Clear All
                                </button>
                                <button className="apply-button" onClick={onSubmit}>
                                    Apply
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Delivery Time Filter */}
                <div className="filter-time">
                    <button className="filter-button" onClick={() => toggleDropdown('deliveryTime')}>
                        <p className="filter-label">Delivery time</p>
                        <ChevronIcon className="chevron-icon-down" />
                    </button>
                    {activeDropdown === 'deliveryTime' && (
                        <div className="dropdown-content" ref={elDeliveryTimeRef}>
                            <ul>
                                <li>
                                    <input
                                        className="radio-dot"
                                        type="radio"
                                        value="day"
                                        name="daysToMake"
                                        onChange={handleChange}
                                    />
                                    Express 24H
                                </li>
                                <li>
                                    <input
                                        className="radio-dot"
                                        type="radio"
                                        value="3days"
                                        name="daysToMake"
                                        onChange={handleChange}
                                    />
                                    up to 3 days
                                </li>
                                <li>
                                    <input
                                        className="radio-dot"
                                        type="radio"
                                        value="7days"
                                        name="daysToMake"
                                        onChange={handleChange}
                                    />
                                    up to 7 days
                                </li>
                                <li>
                                    <input
                                        className="radio-dot"
                                        type="radio"
                                        value="anytime"
                                        name="daysToMake"
                                        onChange={handleChange}
                                    />
                                    More than 7 days
                                </li>
                            </ul>
                            <div className="sort-buttons-section">
                                <button className="clear-button" onClick={onClear}>
                                    Clear All
                                </button>
                                <button className="apply-button" onClick={onSubmit}>
                                    Apply
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
